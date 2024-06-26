/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 spaceman.gltf 
Author: Dmitry Shayakhmetov (https://sketchfab.com/dmitryshayakhmetov)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spaceman-b28781d2ffce407c8f508fb73232bee9
Title: SpaceMan
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/spaceman.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_6.geometry} material={materials['tiger-edit']} position={[0.065, -0.585, -2.603]} rotation={[-2.638, -0.056, 0.17]} scale={0.08} />
      <mesh geometry={nodes.Object_9.geometry} material={materials['1sTONEnEW']} position={[-0.083, -0.427, -0.841]} rotation={[3.012, -0.024, 2.984]} scale={0.632} />
      <group position={[0.076, -0.514, -2.637]} rotation={[-0.142, -0.625, -0.057]} scale={0}>
        <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.material_4} />
      </group>
      <mesh geometry={nodes.Object_19.geometry} material={materials.ClothLight} position={[-0.007, 0.191, -1.033]} rotation={[0, 1.039, -Math.PI / 2]} scale={0.022} />
      <group position={[-0.07, -0.411, -0.925]} rotation={[0, -0.535, 0]} scale={0.132}>
        <mesh geometry={nodes.Object_24.geometry} material={materials['Boti.001']} />
        <mesh geometry={nodes.Object_28.geometry} material={materials['Lamki.001']} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.ClothLight} />
        <mesh geometry={nodes.Object_35.geometry} material={materials['Bag.001']} />
        <mesh geometry={nodes.Object_39.geometry} material={materials['Cloth.001']} />
        <mesh geometry={nodes.Object_42.geometry} material={materials['Cloth2.001']} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.ClothLight} />
        <mesh geometry={nodes.Object_49.geometry} material={materials['Man.001']} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Glass2} />
        <mesh geometry={nodes.Object_57.geometry} material={materials['Osheinik.001']} />
      </group>
      <group position={[-3.21, -0.133, 0.004]} rotation={[0, 0, Math.PI / 2]} scale={[0.163, 0.647, 0.163]}>
        <mesh geometry={nodes.Object_60.geometry} material={materials['Ship.002']} />
        <mesh geometry={nodes.Object_62.geometry} material={materials['Ship.003']} />
        <mesh geometry={nodes.Object_64.geometry} material={materials['Glass.001']} />
      </group>
      <mesh geometry={nodes.Object_67.geometry} material={materials['Material.001']} position={[0.14, -0.094, -0.027]} rotation={[1.818, -0.434, 2.363]} scale={5.017} />
      <group position={[0.023, -0.1, 0.065]} rotation={[3.118, 0.024, 0.29]} scale={[-0.006, 0.006, 0.006]}>
        <mesh geometry={nodes.Object_70.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_72.geometry} material={materials.SaturnRings} />
      </group>
      <group position={[-3.21, -0.133, 0.004]} rotation={[0, 0, Math.PI / 2]} scale={[0.163, 0.647, 0.163]}>
        <mesh geometry={nodes.Object_75.geometry} material={materials['Ship.002']} />
        <mesh geometry={nodes.Object_77.geometry} material={materials['Ship.003']} />
        <mesh geometry={nodes.Object_79.geometry} material={materials['Glass.001']} />
      </group>
      <mesh geometry={nodes.Object_82.geometry} material={materials.ClothLight} position={[-3.189, -0.135, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 1.99, 0.04]} />
      <mesh geometry={nodes.Object_85.geometry} material={materials.ClothLight} position={[-3.189, -0.135, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.04, 1.99, 0.04]} />
      <mesh geometry={nodes.Object_91.geometry} material={materials.Trava} position={[-0.494, -0.458, 1.397]} rotation={[-0.114, -0.092, -0.06]} scale={0.539} />
      <mesh geometry={nodes.Object_94.geometry} material={materials.Fire} position={[-0.74, -0.359, 0.083]} rotation={[Math.PI / 2, 0, 0]} scale={[0.15, 0.277, 0.2]} />
      <mesh geometry={nodes.Object_88.geometry} material={materials.Mount} />
    </group>
  )
}

useGLTF.preload('/spaceman.gltf')
