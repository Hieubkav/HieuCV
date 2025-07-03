// Projects data and functionality
export const projectsData = [
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

export function loadProjectsContent() {
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
