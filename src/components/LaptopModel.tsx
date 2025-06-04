import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LaptopModel = () => {
  const laptopRef = useRef<THREE.Group>(null);
  const screenTextRef = useRef<THREE.Group>(null);
  const cursorRef = useRef<THREE.Mesh>(null);
  const keyboardKeysRef = useRef<THREE.Group>(null);
  const trackpadRef = useRef<THREE.Mesh>(null);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeKeys, setActiveKeys] = useState<Set<number>>(new Set());
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  // Real JavaScript code to be typed
  const codeLines = [
    "// Building awesome portfolio 🚀",
    "const developer = {",
    "  name: 'Khushali Trivedi',",
    "  skills: ['React', 'TypeScript', 'Node.js'],",
    "  passion: 'Full-Stack Development',",
    "  currentProject: 'Interactive Portfolio',",
    "  getLevelOfExcitement: () => {",
    "    return Math.max(100, 'INFINITE');",
    "  }",
    "};",
    "",
    "// Let's create something amazing!",
    "developer.build().deploy().celebrate();"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          setCurrentChar(prev => prev + 1);
          // Simulate realistic typing with random key presses
          if (Math.random() > 0.3) { // Don't press keys for every character
            const randomKey = Math.floor(Math.random() * 20);
            setActiveKeys(new Set([randomKey]));
            setTimeout(() => setActiveKeys(new Set()), 150);
          }
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
          }, 800);
        }
      } else {
        // Reset after completing all lines
        setTimeout(() => {
          setCurrentLine(0);
          setCurrentChar(0);
        }, 3000);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [currentLine, currentChar, codeLines.length]);

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }

    // Animate cursor blinking
    if (Math.floor(state.clock.elapsedTime * 2) % 2 === 0) {
      if (!cursorVisible) setCursorVisible(true);
    } else {
      if (cursorVisible) setCursorVisible(false);
    }

    // Animate keyboard keys
    if (keyboardKeysRef.current) {
      keyboardKeysRef.current.children.forEach((key, index) => {
        const mesh = key as THREE.Mesh;
        const isActive = activeKeys.has(index);
        mesh.position.y = isActive ? -0.02 : 0;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissiveIntensity = isActive ? 0.4 : 0.1;
      });
    }

    // Add subtle trackpad glow animation
    if (trackpadRef.current) {
      const material = trackpadRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.05 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
    }
  });

  const createKeyboardKeys = () => {
    const keys = [];
    const keyLayout = [
      ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
      ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
      ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    let keyIndex = 0;
    keyLayout.forEach((row, rowIndex) => {
      row.forEach((key, colIndex) => {
        const xPos = -1 + (colIndex * 0.2) + (rowIndex === 1 ? 0.1 : 0) + (rowIndex === 2 ? 0.2 : 0);
        const zPos = 0.3 - (rowIndex * 0.2);

        keys.push(
          <mesh
            key={keyIndex}
            position={[xPos, 0.055, zPos]}
          >
            <boxGeometry args={[0.15, 0.03, 0.15]} />
            <meshStandardMaterial
              color="#6b7280"
              emissive="#4f46e5"
              emissiveIntensity={0.1}
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
        );
        keyIndex++;
      });
    });

    // Space bar
    keys.push(
      <mesh
        key={keyIndex}
        position={[0, 0.055, 0.7]}
      >
        <boxGeometry args={[1.2, 0.03, 0.15]} />
        <meshStandardMaterial
          color="#6b7280"
          emissive="#4f46e5"
          emissiveIntensity={0.1}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    );

    return keys;
  };

  const getCodeColor = (char: string, line: string, charIndex: number) => {
    // Enhanced syntax highlighting
    if (line.startsWith('//')) {
      return '#6a9955'; // Comments in green
    }
    if (char === '{' || char === '}' || char === '[' || char === ']' || char === '(' || char === ')') {
      return '#ffd700'; // Brackets in gold
    }
    if (char === "'" || char === '"' || char === '`') {
      return '#ce9178'; // Strings in orange
    }
    if (/[0-9]/.test(char)) {
      return '#b5cea8'; // Numbers in light green
    }
    if (char === ':' || char === ',' || char === ';') {
      return '#d4d4d4'; // Punctuation in light gray
    }
    if (['const', 'let', 'var', 'function', 'return', 'Math'].some(keyword =>
      line.substring(charIndex).startsWith(keyword))) {
      return '#569cd6'; // Keywords in blue
    }
    if (['name', 'skills', 'passion', 'currentProject', 'getLevelOfExcitement'].some(prop =>
      line.substring(charIndex).startsWith(prop))) {
      return '#9cdcfe'; // Properties in light blue
    }
    if (char === '=' || char === '+' || char === '>' || char === '<') {
      return '#d4d4d4'; // Operators
    }
    return '#d4d4d4'; // Default text color
  };

  const renderCodeOnScreen = () => {
    const textElements = [];

    for (let i = 0; i <= currentLine && i < codeLines.length; i++) {
      const line = i === currentLine ? codeLines[i].substring(0, currentChar) : codeLines[i];
      const yPos = 0.7 - (i * 0.1); // Adjust line spacing

      // Create individual character meshes with proper syntax highlighting
      const chars = line.split('');
      chars.forEach((char, charIndex) => {
        if (char === ' ') return; // Skip spaces for cleaner look

        const color = getCodeColor(char, line, charIndex);

        textElements.push(
          <mesh key={`${i}-${charIndex}`} position={[-1.2 + (charIndex * 0.06), yPos, 0]}>
            <boxGeometry args={[0.04, 0.06, 0.001]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.6}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      });
    }

    return textElements;
  };

  return (
    <group ref={laptopRef} position={[0, 0, 0]} scale={0.9}>
      {/* Enhanced Laptop Base with rounded edges */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.2, 0.15, 2.2]} />
        <meshStandardMaterial 
          color="#2d3748" 
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Laptop bottom padding */}
      <mesh position={[0, -0.17, 0]}>
        <boxGeometry args={[3, 0.05, 2]} />
        <meshStandardMaterial 
          color="#1a202c" 
          roughness={0.6}
          metalness={0.3}
        />
      </mesh>

      {/* Enhanced Screen Frame with gradient effect */}
      <mesh position={[0, 0.9, -1]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[3, 1.9, 0.08]} />
        <meshStandardMaterial 
          color="#1a202c" 
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Screen bezel */}
      <mesh position={[0, 0.9, -0.96]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[2.9, 1.8, 0.02]} />
        <meshStandardMaterial 
          color="#0f0f0f" 
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Screen Display Background with subtle glow */}
      <mesh position={[0, 0.9, -0.94]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[2.7, 1.7, 0.01]} />
        <meshStandardMaterial 
          color="#1e1e1e" 
          emissive="#0a0a0a" 
          emissiveIntensity={0.4}
          roughness={0.1}
        />
      </mesh>

      {/* Enhanced VS Code-like title bar */}
      <mesh position={[0, 1.65, -0.93]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[2.7, 0.12, 0.001]} />
        <meshStandardMaterial
          color="#323233"
          emissive="#404040"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Window control buttons */}
      <mesh position={[-1.2, 1.65, -0.92]} rotation={[-0.08, 0, 0]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial
          color="#ff5f56"
          emissive="#ff5f56"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[-1.1, 1.65, -0.92]} rotation={[-0.08, 0, 0]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial
          color="#ffbd2e"
          emissive="#ffbd2e"
          emissiveIntensity={0.8}
        />
      </mesh>
      <mesh position={[-1, 1.65, -0.92]} rotation={[-0.08, 0, 0]}>
        <sphereGeometry args={[0.02]} />
        <meshStandardMaterial
          color="#27ca3f"
          emissive="#27ca3f"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Enhanced file explorer sidebar */}
      <mesh position={[-1.05, 0.9, -0.91]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.5, 1.7, 0.001]} />
        <meshStandardMaterial
          color="#252526"
          emissive="#1e1e1e"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Line numbers with better contrast */}
      <mesh position={[-0.7, 0.9, -0.90]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.2, 1.7, 0.001]} />
        <meshStandardMaterial
          color="#1e1e1e"
          emissive="#2a2a2a"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Code on Screen */}
      <group ref={screenTextRef} position={[0, 0.9, -0.89]} rotation={[-0.08, 0, 0]}>
        {renderCodeOnScreen()}
      </group>

      {/* Enhanced Blinking Cursor */}
      <mesh
        ref={cursorRef}
        position={[-1.2 + (currentChar * 0.06), 0.9 + (0.7 - (currentLine * 0.1)), -0.88]}
        rotation={[-0.08, 0, 0]}
        visible={cursorVisible && currentLine < codeLines.length}
      >
        <boxGeometry args={[0.02, 0.08, 0.001]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Enhanced Keyboard Base with better materials */}
      <mesh position={[0, 0.025, 0]}>
        <boxGeometry args={[2.8, 0.06, 1.7]} />
        <meshStandardMaterial 
          color="#4a5568" 
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Keyboard Keys */}
      <group ref={keyboardKeysRef} position={[0, 0.05, 0]}>
        {createKeyboardKeys()}
      </group>

      {/* Realistic Trackpad with glass effect and proper proportions */}
      <mesh ref={trackpadRef} position={[0, 0.056, 0.8]}>
        <boxGeometry args={[1.0, 0.008, 0.6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          emissive="#2563eb"
          emissiveIntensity={0.05}
          roughness={0.05}
          metalness={0.9}
          transparent
          opacity={0.95}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Trackpad border for more realistic look */}
      <mesh position={[0, 0.054, 0.8]}>
        <boxGeometry args={[1.02, 0.004, 0.62]} />
        <meshStandardMaterial
          color="#2d3748"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Trackpad subtle click areas */}
      <mesh position={[-0.25, 0.057, 1.05]}>
        <boxGeometry args={[0.48, 0.006, 0.08]} />
        <meshStandardMaterial
          color="#374151"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      <mesh position={[0.25, 0.057, 1.05]}>
        <boxGeometry args={[0.48, 0.006, 0.08]} />
        <meshStandardMaterial
          color="#374151"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>

      {/* Power LED indicator with pulsing effect */}
      <mesh position={[1.3, -0.05, 0.9]}>
        <sphereGeometry args={[0.025]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1.2}
        />
      </mesh>

      {/* Enhanced Laptop hinge with realistic details */}
      <mesh position={[0, 0.45, -1]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, 3]} />
        <meshStandardMaterial 
          color="#1a202c" 
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Laptop ventilation grilles */}
      <mesh position={[-1.2, -0.05, 0.8]}>
        <boxGeometry args={[0.8, 0.02, 0.1]} />
        <meshStandardMaterial 
          color="#1a202c" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>
      <mesh position={[1.2, -0.05, 0.8]}>
        <boxGeometry args={[0.8, 0.02, 0.1]} />
        <meshStandardMaterial 
          color="#1a202c" 
          roughness={0.6}
          metalness={0.4}
        />
      </mesh>

      {/* Brand logo area */}
      <mesh position={[0, 1.4, -0.92]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.001]} />
        <meshStandardMaterial
          color="#4a5568"
          emissive="#6366f1"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  );
};

export default LaptopModel;
