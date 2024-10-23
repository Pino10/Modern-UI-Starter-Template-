# Modern UI Starter Template 🚀

A simple, customizable UI starter template for your web projects. Built with vanilla HTML, CSS, and JavaScript - no frameworks needed!

## 👀 What's Inside

- **Auth Pages**
  - Login
  - Signup
  - Password Reset
  - OTP Verification

- **Dashboard**
  - Admin Panel
  - Stats Cards
  - Charts
  - Tables

- **User Pages**
  - Profile
  - Settings

## 🚀 Quick Start

1. **Get the code**
```bash
git clone [repository-url]
# or just download the ZIP
```

2. **Start coding**
- Open any HTML file in your browser
- Or use Live Server in VS Code

That's it! Start customizing and building your project.

## 💡 How to Use

### Adding New Pages
```html
<!-- Copy this basic structure -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page</title>
    <!-- Copy the styles from any existing page -->
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

### Customizing Colors
```css
/* Find this in the CSS and change the colors */
:root {
    --primary: #3b82f6;    /* Main color */
    --surface: #ffffff;     /* Background color */
    --text: #0f172a;       /* Text color */
    /* Add your colors here */
}
```

### Adding New Features
- Charts: Uses Chart.js - Just add new canvas elements
- Tables: Copy & modify the existing table structure
- Cards: Reuse the card components and modify content

## 🎨 Customize & Extend

### Want to add more features?
1. **New Components**
   ```html
   <div class="your-component">
       <!-- Copy existing component styles and modify -->
   </div>
   ```

2. **New Styles**
   ```css
   .your-component {
       /* Add your styles */
       /* Use existing CSS variables for consistency */
   }
   ```

3. **New JavaScript**
   ```javascript
   // Add your functions
   function newFeature() {
       // Your code here
   }
   ```

### Examples

#### Add a New Card
```html
<div class="stat-card">
    <h3>Your Title</h3>
    <p class="value">123</p>
    <span class="trend">↑ 10%</span>
</div>
```

#### Add a New Chart
```html
<div class="chart-card">
    <canvas id="newChart"></canvas>
</div>

<script>
const ctx = document.getElementById('newChart').getContext('2d');
new Chart(ctx, {
    // Your chart configuration
});
</script>
```

## 📱 Already Included
- ✅ Responsive design
- ✅ Interactive components
- ✅ Data visualization
- ✅ Form validation
- ✅ Modern UI elements

## 🛠 Tips
- Check the existing code for patterns and reuse them
- Use the same CSS variables for consistency
- Keep the mobile-first approach
- Test on different screen sizes

## 🔧 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🚀 Build Something Awesome!

This is just a starting point. Feel free to:
- Add more features
- Change the design
- Integrate with your backend
- Add your favorite framework
- Make it your own!

---

Happy coding! 🎉

Questions? Need help? Open an issue!

