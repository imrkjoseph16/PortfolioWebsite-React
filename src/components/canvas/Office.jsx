import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

export function Office(props) {
  const computer = useGLTF('./dev_room/gamer_room.glb')

  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 80, ease: 'power1.inOut' } });

    tl.current
      // .to(ref.current.position, { y: -1, x: 3, z: 10, }, 2)
      // .to(ref.current.rotation, { y: -1 }, 2)

      //Introduction
      .to(ref.current.position, { y: -1.5 }, 2)
      .to(ref.current.position, { z: -2.2 }, 2)
      .to(ref.current.position, { x: 1 }, 2)
      .to(ref.current.rotation, { y: 1.3 }, 2)

      //About
      .to(ref.current.position, { y: -1.2 }, 100)
      .to(ref.current.position, { z: 0.7 }, 100)
      .to(ref.current.position, { x: 3.4 }, 100)
      .to(ref.current.rotation, { y: -0.0 }, 100)

      //Skills
      .to(ref.current.position, { y: -1.5 }, 200)
      .to(ref.current.position, { z: -0.5 }, 200)
      .to(ref.current.position, { x: 4.5 }, 200)
      .to(ref.current.rotation, { y: 1 }, 200)

      //Projects
      .to(ref.current.position, { y: -1.3 }, 300)
      .to(ref.current.position, { z: -0.0 }, 300)
      .to(ref.current.position, { x: 3.7 }, 300)
      .to(ref.current.rotation, { y: 1.5 }, 300)

      //Contact
      .to(ref.current.position, { y: -1.3 }, 400)
      .to(ref.current.position, { z: 1.2 }, 400)
      .to(ref.current.position, { x: 0.8 }, 400)
      .to(ref.current.rotation, { y: 1.5 }, 400)

      .to(ref.current.position, { x: 2 }, 450)
      .to(ref.current.position, { x: 2.3 }, 500)
      .to(ref.current.position, { y: -2.5 }, 500)

      .to(ref.current.position, { x: 4 }, 550)

    // .to(ref.current.position, { y: 1 }, 10)
    // .to(ref.current.rotation, { z: 0 }, 10)

    // .to(ref.current.position, { y: 0 }, 20)
    // .to(ref.current.rotation, { x: 2 }, 20)

  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[-1.5, -1.2, -2]}
      rotation={[0, 1.6, 0]}>

      <primitive
        object={computer.scene}
      />
    </group>
  );
}

useGLTF.preload("./gamer_room/gamer_room.glb");
