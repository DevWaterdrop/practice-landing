import React, { useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import * as THREE from 'three';
//* Animation
import badgeAnimation from './badge.anim';

const Badge: React.VFC<IProps> = (props) => {
  const { type, size = 40, pixel = false } = props;

  const refParent = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && refParent.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(25, 60 / 60, 0.1, 100);
      camera.position.z = 5;

      const sizeOfParent = refParent.current.getBoundingClientRect();

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(
        pixel ? size : sizeOfParent.width,
        pixel ? size : sizeOfParent.width
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      ref.current.appendChild(renderer.domElement);

      const createObject = () => {
        const material = new THREE.MeshStandardMaterial({
          color: 'white',
          metalness: 0.2,
          roughness: 0.4
        });

        if (type === 'torus') {
          const geometry = new THREE.TorusGeometry(5, 2, 24, 100);
          return new THREE.Mesh(geometry, material);
        }

        const geometry = new THREE.CylinderBufferGeometry(3, 3, 15);
        return new THREE.Mesh(geometry, material);
      };

      const object = createObject();
      object.castShadow = true;
      object.scale.set(0.1, 0.1, 0.1);
      object.rotation.set(10, 10, 0);
      if (type === 'torus') {
        object.rotation.set(0, 0.5, 0);
      } else {
        object.rotation.set(10, 10, 0);
      }
      scene.add(object);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.2);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.set(1024, 1024);
      directionalLight.shadow.camera.far = 15;
      directionalLight.shadow.camera.left = -7;
      directionalLight.shadow.camera.top = 7;
      directionalLight.shadow.camera.right = 7;
      directionalLight.shadow.camera.bottom = -7;
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      const tick = () => {
        if (type === 'torus') {
          object.rotation.x += 0.05;
        } else {
          object.rotation.z += 0.05;
        }

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();
    }
  }, []);

  return (
    <m.div
      style={{
        position: 'relative',
        width: `${size}${pixel ? 'px' : 'rem'}`,
        height: `${size}${pixel ? 'px' : 'rem'}`
      }}
      exit={badgeAnimation.exit}
      ref={refParent}
    >
      <div ref={ref} />
    </m.div>
  );
};

interface IProps {
  type: 'torus' | 'cylinder';
  size?: number;
  pixel?: boolean;
}

export default Badge;
