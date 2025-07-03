# 🚀 Hướng dẫn Deploy HieuCV lên GitHub Pages

## 📋 Yêu cầu

- Tài khoản GitHub
- Git đã được cài đặt
- Repository đã được tạo trên GitHub

## 🔧 Các bước thực hiện

### 1. Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Tạo repository mới với tên `HieuCV`
3. Chọn **Public** (bắt buộc cho GitHub Pages miễn phí)
4. Không tích chọn "Initialize with README"

### 2. Upload code lên GitHub

```bash
# Di chuyển vào thư mục dự án
cd HieuCV

# Khởi tạo Git repository
git init

# Thêm remote origin
git remote add origin https://github.com/USERNAME/HieuCV.git

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "Initial commit: HieuCV portfolio website"

# Push lên GitHub
git push -u origin main
```

### 3. Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab **Settings**
3. Scroll xuống phần **Pages** (bên trái)
4. Trong **Source**, chọn **Deploy from a branch**
5. Chọn branch **main**
6. Chọn folder **/ (root)**
7. Click **Save**

### 4. Đợi deploy hoàn thành

- GitHub sẽ tự động build và deploy website
- Quá trình này mất khoảng 1-5 phút
- Website sẽ có sẵn tại: `https://USERNAME.github.io/HieuCV/`

## 🔄 Cập nhật website

Mỗi khi bạn muốn cập nhật website:

```bash
# Thêm các thay đổi
git add .

# Commit với message mô tả
git commit -m "Update: mô tả thay đổi"

# Push lên GitHub
git push origin main
```

GitHub Pages sẽ tự động deploy lại website sau khi có commit mới.

## ⚡ GitHub Actions (Tự động)

Dự án đã được cấu hình GitHub Actions trong file `.github/workflows/deploy.yml`. 

**Tính năng:**
- Tự động deploy khi có push lên branch main
- Kiểm tra lỗi trước khi deploy
- Tối ưu performance

**Không cần làm gì thêm** - GitHub Actions sẽ tự động chạy!

## 🌐 Custom Domain (Tùy chọn)

Nếu bạn có domain riêng:

1. Tạo file `CNAME` trong root directory:
```
yourdomain.com
```

2. Cấu hình DNS tại nhà cung cấp domain:
```
Type: CNAME
Name: www (hoặc @)
Value: USERNAME.github.io
```

3. Trong GitHub Pages settings, nhập domain vào **Custom domain**

## 🔍 Kiểm tra website

Sau khi deploy thành công:

1. **Kiểm tra URL**: `https://USERNAME.github.io/HieuCV/`
2. **Test responsive**: Thử trên mobile, tablet, desktop
3. **Kiểm tra performance**: Sử dụng Google PageSpeed Insights
4. **SEO check**: Kiểm tra meta tags và sitemap

## 🐛 Troubleshooting

### Website không hiển thị

1. Kiểm tra repository có **public** không
2. Đảm bảo file `index.html` ở root directory
3. Kiểm tra GitHub Actions có lỗi không (tab Actions)

### CSS/JS không load

1. Kiểm tra đường dẫn trong `index.html`
2. Đảm bảo sử dụng relative paths (`css/style.css` thay vì `/css/style.css`)

### Images không hiển thị

1. Kiểm tra files có trong thư mục `images/`
2. Đảm bảo tên file chính xác (case-sensitive)
3. Sử dụng relative paths

## 📊 Monitoring

### Google Analytics (Tùy chọn)

Thêm vào `<head>` trong `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console

1. Đăng ký tại [Google Search Console](https://search.google.com/search-console/)
2. Thêm property với URL website
3. Verify ownership
4. Submit sitemap: `https://USERNAME.github.io/HieuCV/sitemap.xml`

## 🎯 Performance Tips

1. **Optimize images**: Sử dụng WebP format
2. **Minify CSS/JS**: Sử dụng build tools nếu cần
3. **Enable caching**: GitHub Pages tự động cache static files
4. **CDN**: Sử dụng CDN cho libraries (Tailwind, Particles.js)

## 🔒 Security

- GitHub Pages tự động cung cấp HTTPS
- Không expose sensitive information
- Sử dụng environment variables cho API keys (nếu có)

---

🎉 **Chúc mừng! Website của bạn đã live trên internet!** 🎉
