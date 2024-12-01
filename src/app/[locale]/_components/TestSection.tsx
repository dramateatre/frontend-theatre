// import React, { useRef, useEffect } from 'react'
// import * as THREE from 'three'
// import { Card, CardContent } from '@/components/ui/card'
// import Img from '@images/TheatreHall.jpg'

// const ImageCube = () => {
//     const canvasRef = useRef(null)

//     useEffect(() => {
//         if (!canvasRef.current) return

//         // Scene setup
//         const scene = new THREE.Scene()
//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
//         const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })
//         renderer.setSize(400, 400)

//         // Textures for each side of the cube
//         const textureLoader = new THREE.TextureLoader()
//         const textures = [
//             Img, // Front
//             Img, // Back
//             Img, // Top
//             Img, // Bottom
//             Img, // Right
//             Img, // Left
//         ].map((url) => textureLoader.load(url))

//         // Create materials for each side
//         const materials = textures.map((texture) => new THREE.MeshBasicMaterial({ map: texture }))

//         // Create cube
//         const geometry = new THREE.BoxGeometry(3, 3, 3)
//         const cube = new THREE.Mesh(geometry, materials)
//         scene.add(cube)

//         // Position camera
//         camera.position.z = 5

//         // Animation loop
//         let animationFrameId
//         function animate() {
//             animationFrameId = requestAnimationFrame(animate)

//             // Rotate cube
//             cube.rotation.x += 0.01
//             cube.rotation.y += 0.01

//             renderer.render(scene, camera)
//         }
//         animate()

//         // Cleanup function
//         return () => {
//             if (animationFrameId) {
//                 cancelAnimationFrame(animationFrameId)
//             }
//             renderer.dispose()
//             textures.forEach((texture) => texture.dispose())
//         }
//     }, [])

//     return (
//         <Card className="mx-auto w-[450px]">
//             <CardContent className="flex items-center justify-center p-4">
//                 <canvas ref={canvasRef} className="h-[400px] w-[400px]" />
//             </CardContent>
//         </Card>
//     )
// }

// export default ImageCube
