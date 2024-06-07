import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Robotdance(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/contact/robotdance.gltf');  // Ensure the path is correct
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Start all animations if there are multiple, or start a specific one
    actions && Object.values(actions).forEach((action) => action.play());

    return () => actions && Object.values(actions).forEach((action) => action.stop());
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.54}>
          <group name="ac75663859044d1ca9e24221489c4609fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  {nodes._rootJoint && <primitive object={nodes._rootJoint} />}
                  {/* If there are other primitives or objects to render, add them here */}
                  {nodes.Object_7 && <skinnedMesh 
                    name="Object_7" 
                    geometry={nodes.Object_7.geometry} 
                    material={materials['Scene_-_Root']} 
                    skeleton={nodes.Object_7.skeleton} 
                  />}
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/contact/robotdance.gltf');
