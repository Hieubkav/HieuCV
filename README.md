# HieuCV - Portfolio Website

🚀 **Website CV cá nhân của Trần Mạnh Hiếu - Laravel PHP Developer**

## 🌟 Tổng quan

Website CV cá nhân với thiết kế cyberpunk hiện đại, được tối ưu cho GitHub Pages. Trang web giới thiệu thông tin cá nhân, kỹ năng, dự án và kinh nghiệm làm việc của Trần Mạnh Hiếu - một Laravel PHP Developer với 2.5+ năm kinh nghiệm.

## ✨ Tính năng

- **🎨 Thiết kế Cyberpunk**: Giao diện dark mode với hiệu ứng neon và particles
- **📱 Responsive Design**: Tối ưu cho mọi thiết bị từ mobile đến desktop
- **⚡ Performance**: Tải nhanh với CSS/JS được tối ưu
- **🔍 SEO Friendly**: Meta tags và structured data hoàn chỉnh
- **🎭 Interactive Effects**: Particles.js, glitch effects, và animations
- **📊 Modern UI/UX**: Clean, professional và user-friendly

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS, Custom CSS
- **Effects**: Particles.js, CSS Animations
- **Icons**: SVG Icons, Custom Graphics
- **Deployment**: GitHub Pages
- **Build Tools**: Native Web Technologies

## 📁 Cấu trúc dự án

```
HieuCV/
├── index.html              # Trang chính
├── css/
│   ├── style.css          # CSS chính
│   └── cyberpunk.css      # Hiệu ứng cyberpunk
├── js/
│   └── script.js          # JavaScript chính
├── images/
│   ├── logo.webp          # Logo
│   ├── laravel.webp       # Laravel icon
│   └── viblo.webp         # Viblo icon
├── docs/                  # Tài liệu
└── README.md             # File này
```

## 🚀 Cài đặt và chạy

### 1. Clone repository

```bash
git clone https://github.com/Hieubkav/HieuCV.git
cd HieuCV
```

### 2. Chạy local server

```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx serve .

# Hoặc sử dụng PHP
php -S localhost:8000
```

### 3. Mở trình duyệt

Truy cập `http://localhost:8000` để xem website.

## 🌐 Deploy lên GitHub Pages

1. **Push code lên GitHub repository**
2. **Vào Settings > Pages**
3. **Chọn source: Deploy from a branch**
4. **Chọn branch: main**
5. **Chọn folder: / (root)**
6. **Save và đợi deploy**

Website sẽ có sẵn tại: `https://hieubkav.github.io/HieuCV/`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

```css
/* Cyberpunk Colors */
--neon-blue: #00f3ff
--neon-purple: #9d00ff
--neon-pink: #ff0099
--neon-green: #39ff14
--dark-bg: #000000
--dark-surface: #0a0a0a
```

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Customization

### Thay đổi thông tin cá nhân

Chỉnh sửa file `js/script.js` trong các function:
- `loadCVContent()` - Thông tin CV
- `loadSkillsContent()` - Kỹ năng
- `loadProjectsContent()` - Dự án
- `loadContactContent()` - Liên hệ

### Thay đổi màu sắc

Chỉnh sửa file `css/cyberpunk.css` trong phần `:root` variables.

### Thêm hiệu ứng

Chỉnh sửa file `css/cyberpunk.css` để thêm animations và effects mới.

## 📞 Liên hệ

- **Email**: tranmanhhieu010@gmail.com
- **Phone**: 0948066514
- **GitHub**: [github.com/Hieubkav](https://github.com/Hieubkav)
- **Viblo**: [viblo.asia/u/Hieubkav](https://viblo.asia/u/Hieubkav)

## 📄 License

MIT License - Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🙏 Acknowledgments

- **Particles.js** - Hiệu ứng particles
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Free hosting
- **Viblo Community** - Inspiration và support

---

⭐ **Nếu bạn thấy project này hữu ích, hãy cho một star nhé!** ⭐
