// CV content functionality
export function loadCVContent() {
    const cvContent = document.getElementById('cv-content');
    if (!cvContent) return;

    cvContent.innerHTML = `
        <div class="relative max-w-7xl mx-auto p-3 md:p-5 bg-white dark:bg-black mb-8 shadow-xl rounded-lg
            border border-gray-200 dark:border-cyan-800
            dark:shadow-[0_0_15px_rgba(0,243,255,0.15)]">

            <!-- Dark mode effects -->
            <div class="absolute inset-0 opacity-0 dark:opacity-5
                bg-[linear-gradient(90deg,var(--neon-blue)_1px,transparent_1px),linear-gradient(0deg,var(--neon-blue)_1px,transparent_1px)]
                bg-[size:20px_20px] rounded-lg pointer-events-none"></div>

            <!-- Header Section -->
            <div class="relative mb-6">
                <div class="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-800 h-24 md:h-32 rounded-t-lg overflow-hidden">
                    <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent dark:bg-cyan-500 dark:shadow-[0_0_8px_rgba(0,243,255,0.8)]"></div>
                </div>
                <div class="absolute top-6 md:top-8 left-3 md:left-6 flex items-end space-x-3">
                    <div class="w-16 h-16 md:w-24 md:h-24 rounded-full border-3 border-white dark:border-cyan-900 overflow-hidden shadow-xl dark:shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                        <img
                            src="https://images.viblo.asia/200x200/3c4ca05a-6487-4fba-9f1f-bbcda57c4255.jpg"
                            alt="Trần Mạnh Hiếu"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="mb-1">
                        <h1 class="text-lg md:text-2xl font-bold text-white dark:text-cyan-50">TRẦN MẠNH HIẾU</h1>
                        <p class="text-white text-sm md:text-lg font-bold italic dark:text-cyan-200">Ứng tuyển: Dev Laravel</p>
                    </div>
                </div>
            </div>

            <!-- Quote Section -->
            <div class="mb-5 px-3 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-cyan-900/50 rounded-lg italic text-gray-700 dark:text-gray-300 text-center text-xs md:text-sm relative">
                <div class="absolute -top-1 -left-1 text-xl text-gray-300 dark:text-cyan-700">"</div>
                <div class="absolute -bottom-1 -right-1 text-xl text-gray-300 dark:text-cyan-700">"</div>
                <p class="relative z-10">Laravel Developer với 2.5+ năm kinh nghiệm thực tế, đam mê xây dựng sản phẩm có tác động tích cực. Sẵn sàng đóng góp vào đội ngũ để tạo ra những giải pháp công nghệ hiện đại và bền vững.</p>
            </div>

            <!-- Main Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                <!-- Column 1: Personal Info + Links + Languages -->
                <div class="space-y-4">
                    <!-- Thông tin cá nhân -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-3 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-12 h-12 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-6 -translate-y-6
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-base font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            THÔNG TIN
                        </h2>
                        <div class="mt-2 space-y-2">
                            <p class="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                <svg class="w-3 h-3 text-blue-600 dark:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                tranmanhhieu10@gmail.com
                            </p>
                            <p class="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                <svg class="w-3 h-3 text-blue-600 dark:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                0948066514
                            </p>
                            <p class="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                <svg class="w-3 h-3 text-blue-600 dark:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                24/04/2001
                            </p>
                            <p class="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                <svg class="w-3 h-3 text-blue-600 dark:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Hưng Lợi, Ninh Kiều, Cần Thơ
                            </p>

                        </div>
                    </section>

                    <!-- Links -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-3 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-12 h-12 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-6 -translate-y-6
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-base font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                            </svg>
                            LIÊN KẾT
                        </h2>
                        <div class="mt-2 space-y-2">
                            <a href="https://github.com/Hieubkav" target="_blank"
                               class="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors text-sm">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a>
                            <a href="https://viblo.asia/u/Hieubkav" target="_blank"
                               class="flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors text-sm">
                                <span class="w-3 h-3 bg-blue-600 dark:bg-cyan-400 text-white dark:text-gray-900 rounded text-xs font-bold flex items-center justify-center">V</span>
                                Viblo
                            </a>
                        </div>
                    </section>

                    <!-- Languages -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-3 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-12 h-12 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-6 -translate-y-6
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-base font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                            </svg>
                            NGOẠI NGỮ
                        </h2>
                        <div class="mt-2">
                            <div class="flex items-center gap-2 bg-gray-100 dark:bg-gray-800/30 rounded p-2 border border-transparent hover:border-gray-200
                                 dark:hover:border-cyan-900/30 transition-colors">
                                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                    <span class="text-blue-600 dark:text-cyan-400 font-bold text-sm">EN</span>
                                </div>
                                <div>
                                    <h3 class="font-medium text-gray-800 dark:text-white text-sm">Tiếng Anh</h3>
                                    <div class="flex items-center gap-2">
                                        <span class="text-gray-600 dark:text-gray-300 text-sm">Chứng chỉ B1</span>
                                        <span class="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400
                                             text-xs rounded font-medium">CEFR</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Column 2: Education + Experience -->
                <div class="space-y-4">
                    <!-- Education -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-3 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-12 h-12 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-6 -translate-y-6
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-base font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            </svg>
                            HỌC VẤN
                        </h2>
                        <div class="mt-2 space-y-2">
                            <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                <svg class="w-3 h-3 text-blue-600 dark:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span class="font-medium">Đại học Cần Thơ (CTU)</span>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 text-sm pl-5">Kỹ thuật phần mềm - K45 (2019-2023)</p>
                            <p class="text-gray-600 dark:text-gray-400 text-sm pl-5">GPA: <span class="font-semibold text-blue-600 dark:text-cyan-400">3.24</span></p>
                        </div>
                    </section>

                    <!-- Experience -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-2 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-8 h-8 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-4 -translate-y-4
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-sm font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-1 pb-1 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            KINH NGHIỆM LÀM VIỆC
                        </h2>
                        <div class="mt-1 space-y-2 relative z-10">
                            <!-- Phương Việt -->
                            <div class="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5
                                 before:bg-gradient-to-b from-blue-600 to-blue-400 dark:from-cyan-400 dark:to-blue-500">
                                <div class="absolute -left-1 top-1 w-2 h-2 bg-white dark:bg-gray-900 rounded-full border-2 border-blue-600 dark:border-cyan-400
                                      group-hover:border-blue-500 dark:group-hover:border-cyan-300 transition-colors"></div>
                                <div class="flex flex-col gap-0.5">
                                    <h3 class="font-semibold text-gray-800 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                                        Công ty TNHH Phương Việt
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 px-1 py-0.5 rounded text-xs font-medium">
                                            Laravel Developer
                                        </span>
                                        <span class="text-gray-600 dark:text-gray-400 text-xs">09/2024 - 02/2025</span>
                                    </div>
                                </div>
                                <div class="mt-1 bg-gray-100 dark:bg-gray-800/30 rounded p-1 border border-gray-200 dark:border-gray-800">
                                    <ul class="space-y-0.5">
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Website TMĐT bán bánh với tracking khách hàng</span>
                                        </li>
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Hệ thống khóa học làm bánh online</span>
                                        </li>
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Tối ưu hệ thống quản lý phòng khám pkngocnhan.vn</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- Y tế Miền Tây -->
                            <div class="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5
                                 before:bg-gradient-to-b from-blue-600 to-blue-400 dark:from-cyan-400 dark:to-blue-500">
                                <div class="absolute -left-1 top-1 w-2 h-2 bg-white dark:bg-gray-900 rounded-full border-2 border-blue-600 dark:border-cyan-400
                                      group-hover:border-blue-500 dark:group-hover:border-cyan-300 transition-colors"></div>
                                <div class="flex flex-col gap-0.5">
                                    <h3 class="font-semibold text-gray-800 dark:text-white text-xs group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                                        Công ty TNHH Trang thiết bị Y tế Miền Tây
                                    </h3>
                                    <div class="flex items-center gap-1">
                                        <span class="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-400 px-1 py-0.5 rounded text-xs font-medium">
                                            Dev & IT Helpdesk
                                        </span>
                                        <span class="text-gray-600 dark:text-gray-400 text-xs">03/2023 - 02/2024</span>
                                    </div>
                                </div>
                                <div class="mt-1 bg-gray-100 dark:bg-gray-800/30 rounded p-1 border border-gray-200 dark:border-gray-800">
                                    <ul class="space-y-0.5">
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Website và hệ thống quản lý cho phòng đấu thầu</span>
                                        </li>
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Quản lý admin các web bán hàng</span>
                                        </li>
                                        <li class="flex gap-1 text-gray-700 dark:text-gray-300 text-xs">
                                            <span class="text-blue-600 dark:text-cyan-500 mt-0.5">•</span>
                                            <span>Sử dụng thành thạo Haravan, KiotViet, Sapo</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>




                <!-- Column 3: Skills Extended -->
                <div class="space-y-4">
                    <!-- Skills -->
                    <section class="bg-white dark:bg-gray-900/30 rounded-lg p-3 border border-gray-100 dark:border-cyan-900/30
                              shadow-md dark:shadow-[0_0_10px_rgba(0,243,255,0.1)] relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-12 h-12 bg-transparent dark:bg-cyan-900/20 transform rotate-45 translate-x-6 -translate-y-6
                              opacity-0 dark:opacity-100 transition-opacity"></div>

                        <h2 class="text-base font-bold text-gray-800 dark:text-cyan-400 flex items-center gap-2 pb-2 border-b border-gray-200 dark:border-cyan-900/50
                               group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                            KỸ NĂNG
                        </h2>
                        <div class="mt-2 space-y-4">
                            <!-- Laravel -->
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Laravel 2+ năm</span>
                                        <span class="text-xs ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded">Chính</span>
                                    </div>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-500 dark:to-blue-400 rounded-full w-[90%]
                                         animate-pulse"></div>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Eloquent ORM, Blade Templates, Middleware, Auth, Queues, Events, API Resources</p>
                            </div>

                            <!-- TALL Stack -->
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">TALL Stack</span>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-500 dark:to-blue-400 rounded-full w-[85%]
                                         animate-pulse"></div>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Tailwind CSS, Alpine.js, Laravel, Livewire - Phát triển ứng dụng đầy đủ frontend và backend</p>
                            </div>

                            <!-- Database -->
                            <div class="space-y-2">
                                <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Database</span>
                                <div class="flex flex-wrap gap-2">
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        MySQL (Thành thạo)
                                    </span>
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        PostgreSQL (Cơ bản)
                                    </span>
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        Redis
                                    </span>
                                </div>
                            </div>

                            <!-- FilamentPHP -->
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">FilamentPHP</span>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-500 dark:to-blue-400 rounded-full w-[85%]
                                         animate-pulse"></div>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Admin Panel, Resources, Forms, Tables, Widgets, Actions, tích hợp với TALL Stack</p>
                            </div>

                            <!-- Deployment & DevOps -->
                            <div class="space-y-2">
                                <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">Deployment & DevOps</span>
                                <div class="flex flex-wrap gap-2">
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        Cpanel (Thành thạo)
                                    </span>
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        Git/GitHub
                                    </span>
                                    <span class="inline-flex items-center px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded text-xs">
                                        <span class="w-2 h-2 bg-blue-500 dark:bg-cyan-400 rounded-full mr-1"></span>
                                        SSL/HTTPS
                                    </span>
                                </div>
                            </div>

                            <!-- AI trong lập trình -->
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <div>
                                        <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">AI trong lập trình</span>
                                        <span class="text-xs ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded">Mới</span>
                                    </div>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-2 bg-gradient-to-r from-green-600 to-green-400 dark:from-green-500 dark:to-green-400 rounded-full w-[80%]
                                         animate-pulse"></div>
                                </div>
                                <p class="text-xs text-gray-500 dark:text-gray-400">Sử dụng AI để tăng tốc quy trình phát triển, tạo mã, debug và tối ưu hóa hiệu suất</p>
                            </div>

                            <!-- HTML/CSS/JS/PHP -->
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">HTML/CSS/JS/PHP</span>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-2 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-cyan-500 dark:to-blue-400 rounded-full w-[90%]
                                         animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `;
}
