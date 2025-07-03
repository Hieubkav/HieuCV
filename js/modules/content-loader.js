// Content loader for all sections
import { loadProjectsContent } from './projects.js';
import { loadCVContent } from './cv-content.js';

export function loadAllContent() {
    // Load initial content
    loadHomeContent();
    loadAboutContent();
    loadProjectsContent();
    loadCVContent();
    loadContactContent();
}

function loadHomeContent() {
    const homeContent = document.getElementById('home-content');
    if (!homeContent) return;

    homeContent.innerHTML = `
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 hero-text">
                Trần Mạnh Hiếu
            </h1>
            <p class="text-xl md:text-2xl text-cyan-400 mb-8">
                Laravel Developer
            </p>
            <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Chuyên phát triển web application với Laravel Framework. 
                Có kinh nghiệm thực tế với các dự án e-commerce, quản lý phòng khám, và hệ thống học trực tuyến.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" class="btn btn-primary">
                    Xem Dự Án
                </a>
                <a href="#cv" class="btn btn-secondary">
                    Tải CV
                </a>
            </div>
        </div>
    `;
}

function loadAboutContent() {
    const aboutContent = document.getElementById('about-content');
    if (!aboutContent) return;

    aboutContent.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Về Tôi
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card">
                    <h3 class="text-xl font-bold text-cyan-400 mb-4">Kinh Nghiệm</h3>
                    <p class="text-gray-300 mb-4">
                        Có 2+ năm kinh nghiệm phát triển web với Laravel Framework. 
                        Đã tham gia nhiều dự án thực tế từ e-commerce đến hệ thống quản lý.
                    </p>
                    <ul class="text-gray-300 space-y-2">
                        <li>• Laravel & TALL Stack</li>
                        <li>• MySQL & PostgreSQL</li>
                        <li>• API Development</li>
                        <li>• E-commerce Solutions</li>
                    </ul>
                </div>
                <div class="card">
                    <h3 class="text-xl font-bold text-cyan-400 mb-4">Học Vấn</h3>
                    <p class="text-gray-300 mb-4">
                        Tốt nghiệp Kỹ thuật Phần mềm tại Đại học Cần Thơ (K45).
                        Có chứng chỉ tiếng Anh B1.
                    </p>
                    <div class="text-gray-300">
                        <p><strong>GPA:</strong> 3.24/4.0</p>
                        <p><strong>Năm:</strong> 2019-2023</p>
                        <p><strong>Chuyên ngành:</strong> Kỹ thuật Phần mềm</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadContactContent() {
    const contactContent = document.getElementById('contact-content');
    if (!contactContent) return;

    contactContent.innerHTML = `
        <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
                Liên Hệ
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card text-center">
                    <div class="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">Email</h3>
                    <p class="text-gray-300">tranmanhhieu10@gmail.com</p>
                </div>
                <div class="card text-center">
                    <div class="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">Điện Thoại</h3>
                    <p class="text-gray-300">0948066514</p>
                </div>
                <div class="card text-center">
                    <div class="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-cyan-400 mb-2">Địa Chỉ</h3>
                    <p class="text-gray-300">Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                </div>
            </div>
        </div>
    `;
}
