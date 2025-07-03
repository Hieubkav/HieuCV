// Main JavaScript for HieuCV - Non-module version for compatibility
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    loadAllContent();
    initAnimations();
    initScrollEffects();
    initSpeedDial();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Particles.js initialization
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00f3ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00f3ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Animation utilities
function initAnimations() {
    // Fade in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Typing animation for hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        typeWriter(heroText, heroText.textContent, 100);
    }
}

function typeWriter(element, text, speed) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Scroll effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.parallax');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Content loader for all sections
function loadAllContent() {
    // Load initial content
    loadHomeContent();
    loadAboutContent();
    loadProjectsContent();
    loadCVContent();
    loadSkillsContent();
    loadStoryContent();
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

// Projects data and functionality
const projectsData = [
    {
        id: 'glass-try-on',
        title: 'Glass Try On',
        subtitle: 'Dự án thử kính ảo với Face Mesh',
        description: 'Ứng dụng thử kính ảo sử dụng công nghệ Face Mesh. Đặc điểm nổi bật: chỉ cần upload ảnh kính 2D là có thể thực hiện đeo kính trực tiếp, vừa dễ dàng cho admin quản lý vừa đề xuất được loại kính phù hợp dựa theo khuôn mặt.',
        technologies: ['Face Mesh', 'AI Vision', 'WebRTC', 'JavaScript', 'Canvas API'],
        url: 'https://glass.vitrasau.info.vn/try_on/3',
        icon: 'eye',
        color: 'purple-pink',
        period: '2024-2025'
    },
    {
        id: 'thanshoes',
        title: 'thanshoes.vn',
        subtitle: 'Website TMĐT giày với tích hợp Sapo',
        description: 'Tích hợp dữ liệu từ Sapo. Tự xử lý nghiệp vụ nhập hàng Trung Quốc. Import Excel, tự động tính chi phí nhập hàng. Giải quyết bài toán cặp ghép nhập giày để tối ưu nhanh nhất có thể, vừa ít nhất có thể vừa tối ưu đôi nào bán chạy vừa cân bằng tải giữa các đôi.',
        technologies: ['TALL stack', 'Filament', 'MySQL', 'Sapo API', 'Excel Import'],
        url: 'http://thanshoes.vn',
        icon: 'shopping-bag',
        color: 'blue-purple',
        period: '12/2024-1/2025'
    },
    {
        id: 'quettheuytincantho',
        title: 'Quét Thẻ Uy Tín Cần Thơ',
        subtitle: 'Website dịch vụ tín dụng đang hoạt động',
        description: 'Website dịch vụ quét thẻ uy tín tại Cần Thơ. Hệ thống quản lý dịch vụ tín dụng, xử lý giao dịch và quản lý khách hàng. Website đang hoạt động và phục vụ khách hàng.',
        technologies: ['Laravel', 'Payment Gateway', 'MySQL', 'Security'],
        url: 'https://quettheuytincantho.com/',
        icon: 'credit-card',
        color: 'green-teal',
        period: '2024-2025'
    },
    {
        id: 'pkngocnhan',
        title: 'pkngocnhan.vn',
        subtitle: 'Phòng khám đa khoa Vĩnh Long',
        description: 'Phòng khám đa khoa ở Vĩnh Long. Quản lý bệnh án, lịch hẹn, giới thiệu dịch vụ y tế và thông tin bác sĩ.',
        technologies: ['TALL stack', 'Filament', 'MySQL', 'PDF Export'],
        url: 'http://pkngocnhan.vn',
        icon: 'heart',
        color: 'red-pink',
        period: '5/2024-12/2024'
    },
    {
        id: 'prohardware',
        title: 'ProHardware',
        subtitle: 'Dự án nội thất',
        description: 'Website bán đồ nội thất và trang trí nhà cửa. Catalog sản phẩm, giỏ hàng và quản lý đơn hàng.',
        technologies: ['Laravel', 'E-commerce', 'MySQL', 'Payment'],
        url: 'https://prohardware.com.vn/',
        icon: 'home',
        color: 'orange-red',
        period: '2024-2025'
    },
    {
        id: 'vuphuc-platform',
        title: 'VuPhuc Platform',
        subtitle: 'Nền tảng E-commerce & LMS tích hợp',
        description: 'Nền tảng tích hợp cả bán hàng và khóa học cho Vũ Phúc. Bao gồm E-commerce platform với quản lý sản phẩm, đơn hàng và hệ thống khóa học online với video streaming, quản lý học viên. Đang chốt và triển khai lên đường dẫn chính thức.',
        technologies: ['Laravel', 'E-commerce', 'LMS', 'Video.js', 'MySQL'],
        url: 'https://vuphuc.vitrasau.info.vn/',
        url2: 'https://vba.vitrasau.info.vn/',
        icon: 'shopping-cart',
        color: 'indigo-purple',
        period: 'In Progress',
        status: 'In Progress'
    }
];

function loadProjectsContent() {
    const projectsContent = document.getElementById('projects-content');
    if (!projectsContent) return;

    const projectsHTML = projectsData.map(project => {
        const colorClasses = getColorClasses(project.color);
        const iconSVG = getIconSVG(project.icon);
        const statusBadge = project.status ? `<span class="skill-badge bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">${project.status}</span>` : '';

        return `
            <div class="project-card fade-in">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-br ${colorClasses} rounded-lg flex items-center justify-center">
                        ${iconSVG}
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white">${project.title}</h3>
                        <p class="text-cyan-400 text-sm">${project.subtitle}</p>
                    </div>
                </div>
                <p class="text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `<span class="skill-badge">${tech}</span>`).join('')}
                </div>
                <div class="flex gap-3 mb-2 flex-wrap">
                    <a href="${project.url}" target="_blank" class="btn text-sm">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        ${project.url2 ? 'E-commerce' : (project.status ? 'Live Demo' : 'Live Site')}
                    </a>
                    ${project.url2 ? `<a href="${project.url2}" target="_blank" class="btn text-sm">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        LMS
                    </a>` : ''}
                    ${statusBadge}
                </div>
                <div class="text-xs text-gray-400 font-mono">${project.period}</div>
            </div>
        `;
    }).join('');

    projectsContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${projectsHTML}
        </div>
    `;
}

function getColorClasses(color) {
    const colorMap = {
        'purple-pink': 'from-purple-500 to-pink-600',
        'blue-purple': 'from-blue-500 to-purple-600',
        'green-teal': 'from-green-500 to-teal-600',
        'red-pink': 'from-red-500 to-pink-600',
        'orange-red': 'from-orange-500 to-red-600',
        'indigo-purple': 'from-indigo-500 to-purple-600'
    };
    return colorMap[color] || 'from-blue-500 to-purple-600';
}

function getIconSVG(iconName) {
    const icons = {
        'eye': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>',
        'shopping-bag': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>',
        'credit-card': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>',
        'heart': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>',
        'home': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21l4-4 4 4"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17l-4-4 4-4 4 4-4 4z"></path></svg>',
        'shopping-cart': '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path></svg>'
    };
    return icons[iconName] || icons['shopping-bag'];
}

// CV content functionality - now using module
async function loadCVContent() {
    try {
        const { loadCVContent: moduleLoadCV } = await import('./modules/cv-content.js');
        moduleLoadCV();
    } catch (error) {
        console.error('Error loading CV module:', error);
        // Fallback to simple content
        const cvContent = document.getElementById('cv-content');
        if (cvContent) {
            cvContent.innerHTML = '<p class="text-center text-gray-500">Đang tải CV...</p>';
        }
    }
}






// Skills content functionality
function loadSkillsContent() {
    const skillsContent = document.getElementById('skills-content');
    if (!skillsContent) return;

    skillsContent.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Laravel -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.02c-.01.003-.021.005-.032.005-.05 0-.102-.026-.154-.045L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033.012.009.025.018.037.027.013.014.02.03.033.045.008.011.02.02.024.033.01.02.017.038.024.058.003.011.01.02.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.024-.033.012-.015.021-.030.033-.043.012-.012.025-.02.037-.028.013-.012.027-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.018.021.024.033.011.02.018.04.024.059.006.011.012.021.015.032.009.031.013.064.013.097zM9.93 17.466l-4.76-2.732V5.629l4.76 2.732v9.105zm8.24 0l-4.76-2.732V5.629l4.76 2.732v9.105zm-.74-10.42l-4.76 2.732-4.76-2.732 4.76-2.732 4.76 2.732z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Laravel</h3>
                            <p class="text-cyan-400 text-sm">2+ năm kinh nghiệm</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Framework PHP mạnh mẽ cho phát triển web application.
                        Thành thạo Eloquent ORM, Middleware, Events, Jobs, API Resources.
                    </p>
                </div>

                <!-- TALL Stack -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">TALL Stack</h3>
                            <p class="text-cyan-400 text-sm">Full Stack Development</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Tailwind CSS, Alpine.js, Laravel, Livewire.
                        Phát triển ứng dụng full-stack hiện đại với reactive components.
                    </p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 85%"></div>
                    </div>
                </div>

                <!-- Database -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Database</h3>
                            <p class="text-cyan-400 text-sm">MySQL, PostgreSQL, Redis</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Thiết kế và tối ưu hóa cơ sở dữ liệu.
                        Migration, Seeding, Query optimization, Indexing.
                    </p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 80%"></div>
                    </div>
                </div>

                <!-- FilamentPHP -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">FilamentPHP</h3>
                            <p class="text-cyan-400 text-sm">Admin Panel Builder</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Xây dựng admin panel mạnh mẽ với Resources, Forms, Tables,
                        Widgets, Actions và tích hợp TALL Stack.
                    </p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 85%"></div>
                    </div>
                </div>

                <!-- AI Tools -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">AI trong lập trình</h3>
                            <p class="text-cyan-400 text-sm">Tăng tốc phát triển</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Sử dụng AI tools để tăng tốc quy trình phát triển,
                        tạo mã, debug và tối ưu hóa hiệu suất.
                    </p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 80%"></div>
                    </div>
                </div>

                <!-- Frontend -->
                <div class="skill-card">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-white">Frontend</h3>
                            <p class="text-cyan-400 text-sm">HTML/CSS/JS/PHP</p>
                        </div>
                    </div>
                    <p class="text-gray-300 mb-4">
                        Thành thạo frontend và backend development.
                        Responsive design, JavaScript ES6+, CSS Grid/Flexbox.
                    </p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width: 90%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Story content functionality
function loadStoryContent() {
    const storyContent = document.getElementById('story-content');
    if (!storyContent) return;

    storyContent.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="card">
                    <h3 class="text-2xl font-bold text-cyan-400 mb-4">Hành trình phát triển</h3>
                    <p class="text-gray-300 mb-4">
                        Từ việc tham gia Học sinh giỏi Quốc gia Tin học 2018 đến trở thành Laravel Developer với 2.5+ năm kinh nghiệm thực tế.
                    </p>
                    <p class="text-gray-300 mb-4">
                        Đã mentor thành công cho 7 sinh viên (6 CTU + 1 HUST) hoàn thành luận văn, trong đó bạn HUST đạt 9.5 điểm - cao nhất khóa.
                    </p>
                    <p class="text-gray-300">
                        Hiện tại mong muốn gia nhập đội ngũ để phát triển sản phẩm thực tế và học hỏi từ môi trường chuyên nghiệp.
                    </p>
                </div>
                <div class="card">
                    <h3 class="text-2xl font-bold text-cyan-400 mb-4">Phong cách làm việc</h3>
                    <p class="text-gray-300 mb-4">
                        Luôn tập trung vào chất lượng sản phẩm và trải nghiệm người dùng.
                        Thích làm việc nhóm và sẵn sàng hỗ trợ đồng nghiệp khi cần thiết.
                    </p>
                    <p class="text-gray-300 mb-4">
                        Có khả năng học hỏi nhanh và thích ứng với công nghệ mới.
                        Từ kinh nghiệm tại Phương Việt, tôi hiểu tầm quan trọng của giao tiếp và teamwork.
                    </p>
                    <p class="text-gray-300">
                        Mục tiêu là trở thành Laravel Developer giỏi, đóng góp tích cực cho sự phát triển của công ty và sản phẩm.
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Speed Dial functionality
function initSpeedDial() {
    const backToTopBtn = document.getElementById('back-to-top');

    // Back to top functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Show/hide speed dial based on scroll position
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const speedDial = document.getElementById('speed-dial');

        if (speedDial) {
            if (scrollTop > 300) {
                // Show speed dial when scrolled down
                speedDial.style.opacity = '1';
                speedDial.style.transform = 'translateY(0)';
            } else {
                // Slightly fade when at top but keep visible
                speedDial.style.opacity = '0.8';
                speedDial.style.transform = 'translateY(0)';
            }
        }
    });
}
