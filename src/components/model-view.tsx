import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import * as THREE from "three";
import Lights from "./lights";

import Loader from "./loader";
import { Suspense } from "react";
import Iphone from "./iphone";

type ModelView = {
  index: any,
  groupRef: any,
  gsapType: any,
  controlRef: any,
  setRotationState: any,
  size: any,
  item: any
}

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }: ModelView) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <Iphone
          //@ts-ignore 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView