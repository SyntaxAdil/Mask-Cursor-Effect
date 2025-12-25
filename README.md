# Interactive Mouse Mask Effect

<div align="center">


**A sophisticated, interactive reveal effect that follows cursor movement with dynamic masking**

</div>

## ✨ Features

- **Real-time Cursor Tracking** – Smooth, responsive mask follows mouse movement
- **Dual Interaction Modes** – Context-aware sizing based on hover state
- **GPU-Accelerated Performance** – Utilizes CSS `clip-path` for optimal rendering
- **Lightweight Implementation** – Pure JavaScript with zero dependencies
- **Modern Aesthetics** – Creates engaging user experiences with minimal code

## 🚀 Quick Start

### 1. HTML Structure
```html
<div class="masked-layer">
    <!-- Your content to be revealed -->
</div>

<div class="masked-content">
    <!-- Trigger element for hover expansion -->
</div>
```

### 2. CSS Setup
```css
.masked-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1000;
}

.masked-content {
    position: relative;
    cursor: pointer;
    z-index: 1001;
}
```

### 3. JavaScript Integration
Copy the provided script into your project or import as a module.

## 📋 Prerequisites

- Modern web browser (Chrome 55+, Firefox 54+, Safari 10.1+, Edge 79+)
- CSS `clip-path` support
- JavaScript enabled

## 🎯 Use Cases

| Application | Benefit |
|------------|---------|
| **Portfolio Websites** | Interactive project showcases |
| **Educational Platforms** | Progressive content revelation |
| **Creative Agencies** | Artistic user engagement |
| **Product Demos** | Feature highlighting |
| **Data Visualization** | Focused information display |

## ⚙️ Customization

### Size Parameters
```javascript
// Modify these values in the mousemove event handler
const NORMAL_RADIUS = 10;   // Default cursor-follow size
const EXPAND_RADIUS = 200;  // Hover expansion size
```

### Animation Enhancement
Add CSS transitions for smoother effects:
```css
.masked-layer {
    transition: clip-path 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 55+ | ✅ Full |
| Firefox | 54+ | ✅ Full |
| Safari | 10.1+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| Internet Explorer | Any | ❌ Not Supported |

## 📁 Project Structure

```
project/
├── index.html          # Main HTML document
├── styles/
│   └── main.css       # Styling including masked layer
├── scripts/
│   └── mask-effect.js # Core interaction logic
└── README.md          # Documentation
```

## 🛠️ Development

### Local Testing
1. Clone or download the project files
2. Open `index.html` in a modern browser
3. Move cursor to observe mask behavior
4. Hover over `.masked-content` elements for expansion

### Integration Steps
1. Add required HTML elements with proper classes
2. Include necessary CSS positioning
3. Implement the JavaScript logic
4. Test across target browsers
5. Adjust parameters for desired effect

## 🏗️ Architecture

The solution employs a three-tier approach:

1. **Presentation Layer** – CSS positioning and styling
2. **Interaction Layer** – JavaScript event handling
3. **Visualization Layer** – Dynamic clip-path manipulation

## 📈 Performance

- **60 FPS Target** – Optimized for smooth animations
- **GPU Acceleration** – Leverages browser rendering engines
- **Efficient Event Handling** – Minimal computational overhead
- **Memory Efficient** – No external libraries or frameworks

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add enhancement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Abdur Rahman Adil**  
MERN Stack Developer in Training  
*Specializing in modern web interactions and user experience*

## 🔗 Links

- [Report Issues](https://github.com/yourusername/repository/issues)
- [Request Features](https://github.com/yourusername/repository/issues)
- [Live Demo](#) <!-- Add your demo link here -->

## ⭐ Acknowledgments

- Inspired by modern UI/UX trends in interactive web design
- Thanks to the browser developers for advancing CSS capabilities
- Built with vanilla JavaScript for maximum compatibility

---

<div align="center">

**Elevate user engagement with this elegant, interactive masking solution**

</div>