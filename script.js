// 화장품 데이터베이스
const cosmeticsData = [
    {
        id: 1,
        name: "하이드라 세럼",
        brand: "아쿠아랩",
        category: "skincare",
        price: 45000,
        priceRange: "premium",
        skinTypes: ["dry", "normal", "combination"],
        concerns: ["dryness", "aging"],
        rating: 4.8,
        reviews: 1250,
        description: "24시간 지속되는 깊은 수분 공급으로 건조한 피부에 생기를 불어넣어주는 세럼입니다.",
        ingredients: ["히알루론산", "세라마이드", "비타민E"],
        texture: "light",
        icon: "💧"
    },
    {
        id: 2,
        name: "퓨어 클렌징 폼",
        brand: "내추럴스킨",
        category: "cleansing",
        price: 15000,
        priceRange: "budget",
        skinTypes: ["oily", "combination", "acne"],
        concerns: ["acne", "blackheads"],
        rating: 4.5,
        reviews: 890,
        description: "순한 성분으로 깊숙한 모공 청소와 여드름 예방에 효과적인 클렌징 폼입니다.",
        ingredients: ["살리실산", "티트리오일", "알로에베라"],
        texture: "gel",
        icon: "🧼"
    },
    {
        id: 3,
        name: "글로우 파운데이션",
        brand: "래디언스",
        category: "makeup",
        price: 35000,
        priceRange: "mid",
        skinTypes: ["normal", "dry", "combination"],
        concerns: ["dullness", "coverage"],
        rating: 4.7,
        reviews: 2100,
        description: "자연스러운 윤기와 완벽한 커버력을 동시에 제공하는 글로우 파운데이션입니다.",
        ingredients: ["나이아신아마이드", "스쿠알란", "비타민C"],
        texture: "cream",
        icon: "✨"
    },
    {
        id: 4,
        name: "센시티브 크림",
        brand: "젠틀케어",
        category: "skincare",
        price: 28000,
        priceRange: "mid",
        skinTypes: ["sensitive", "dry"],
        concerns: ["sensitivity", "redness"],
        rating: 4.6,
        reviews: 567,
        description: "민감한 피부를 위한 저자극 진정 크림으로 홍조와 자극을 완화시켜줍니다.",
        ingredients: ["센텔라아시아티카", "마데카소사이드", "판테놀"],
        texture: "rich",
        icon: "🌿"
    },
    {
        id: 5,
        name: "선 프로텍션 SPF50",
        brand: "선가드",
        category: "suncare",
        price: 22000,
        priceRange: "mid",
        skinTypes: ["all"],
        concerns: ["uv_protection", "aging"],
        rating: 4.9,
        reviews: 3400,
        description: "끈적임 없는 가벼운 텍스처로 강력한 자외선 차단 효과를 제공하는 선크림입니다.",
        ingredients: ["징크옥사이드", "티타늄디옥사이드", "나이아신아마이드"],
        texture: "light",
        icon: "☀️"
    },
    {
        id: 6,
        name: "비타민 C 세럼",
        brand: "브라이트닝",
        category: "skincare",
        price: 52000,
        priceRange: "premium",
        skinTypes: ["normal", "oily", "combination"],
        concerns: ["dullness", "dark_spots"],
        rating: 4.7,
        reviews: 1890,
        description: "20% 비타민C 농축으로 칙칙한 피부를 환하게 밝혀주는 브라이트닝 세럼입니다.",
        ingredients: ["비타민C", "비타민E", "페룰산"],
        texture: "light",
        icon: "🍊"
    },
    {
        id: 7,
        name: "레티놀 나이트 크림",
        brand: "안티에이징",
        category: "skincare",
        price: 65000,
        priceRange: "premium",
        skinTypes: ["normal", "dry", "combination"],
        concerns: ["aging", "wrinkles"],
        rating: 4.8,
        reviews: 1200,
        description: "순한 레티놀 성분으로 밤사이 피부 재생과 주름 개선에 도움을 주는 나이트 크림입니다.",
        ingredients: ["레티놀", "스쿠알란", "세라마이드"],
        texture: "rich",
        icon: "🌙"
    },
    {
        id: 8,
        name: "오일 컨트롤 토너",
        brand: "밸런스",
        category: "skincare",
        price: 18000,
        priceRange: "budget",
        skinTypes: ["oily", "combination"],
        concerns: ["oily_skin", "pores"],
        rating: 4.4,
        reviews: 756,
        description: "과도한 유분을 조절하고 모공을 수축시켜 깔끔한 피부로 만들어주는 토너입니다.",
        ingredients: ["나이아신아마이드", "위치하젤", "AHA"],
        texture: "light",
        icon: "🧴"
    },
    {
        id: 9,
        name: "하이라이터 팔레트",
        brand: "루미너스",
        category: "makeup",
        price: 42000,
        priceRange: "premium",
        skinTypes: ["all"],
        concerns: ["highlight", "glow"],
        rating: 4.6,
        reviews: 980,
        description: "자연스러운 윤기부터 강렬한 하이라이트까지 다양한 연출이 가능한 하이라이터 팔레트입니다.",
        ingredients: ["마이카", "실리카", "진주 파우더"],
        texture: "powder",
        icon: "💎"
    },
    {
        id: 10,
        name: "수분 슬리핑 마스크",
        brand: "나이트케어",
        category: "skincare",
        price: 31000,
        priceRange: "mid",
        skinTypes: ["dry", "normal", "combination"],
        concerns: ["dryness", "dullness"],
        rating: 4.7,
        reviews: 1450,
        description: "밤새 집중 수분 공급으로 다음날 촉촉하고 부드러운 피부로 만들어주는 슬리핑 마스크입니다.",
        ingredients: ["히알루론산", "콜라겐", "알란토인"],
        texture: "gel",
        icon: "😴"
    },
    {
        id: 11,
        name: "마일드 아이크림",
        brand: "아이케어",
        category: "skincare",
        price: 39000,
        priceRange: "mid",
        skinTypes: ["all"],
        concerns: ["eye_area", "fine_lines"],
        rating: 4.5,
        reviews: 670,
        description: "민감한 눈가 피부를 위한 순한 아이크림으로 잔주름과 다크서클을 케어해줍니다.",
        ingredients: ["아데노신", "카페인", "펩타이드"],
        texture: "cream",
        icon: "👁️"
    },
    {
        id: 12,
        name: "틴트 립밤",
        brand: "립케어",
        category: "makeup",
        price: 12000,
        priceRange: "budget",
        skinTypes: ["all"],
        concerns: ["lip_care", "color"],
        rating: 4.3,
        reviews: 2200,
        description: "입술에 자연스러운 색감과 촉촉함을 동시에 제공하는 틴트 기능의 립밤입니다.",
        ingredients: ["시어버터", "비타민E", "자연 색소"],
        texture: "balm",
        icon: "💋"
    }
];

// 퀴즈 상태 관리
let currentQuestion = 0;
let quizAnswers = {};
let userSkinType = null;
let currentProducts = [...cosmeticsData];
let displayedProducts = 6;

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    setupFilters();
    displayProducts();
    setupEventListeners();
    animateOnScroll();
});

// 퀴즈 초기화
function initializeQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', handleQuizAnswer);
    });
}

// 퀴즈 답변 처리
function handleQuizAnswer(e) {
    const questionNum = parseInt(e.target.closest('.quiz-question').dataset.question);
    const value = e.target.dataset.value;
    
    // 선택된 옵션 스타일링
    const currentQuestionEl = e.target.closest('.quiz-question');
    const options = currentQuestionEl.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    e.target.classList.add('selected');
    
    // 답변 저장
    quizAnswers[questionNum] = value;
    
    // 다음 질문으로 이동
    setTimeout(() => {
        if (questionNum < 2) {
            showNextQuestion(questionNum + 1);
        } else {
            calculateSkinType();
            showQuizResult();
        }
    }, 500);
}

// 다음 질문 표시
function showNextQuestion(questionNum) {
    const currentQuestionEl = document.querySelector('.quiz-question.active');
    const nextQuestionEl = document.querySelector(`[data-question="${questionNum}"]`);
    
    currentQuestionEl.classList.remove('active');
    nextQuestionEl.classList.add('active');
    currentQuestion = questionNum;
}

// 피부 타입 계산
function calculateSkinType() {
    const skinTypeScore = {
        dry: 0,
        oily: 0,
        combination: 0,
        normal: 0,
        sensitive: 0
    };
    
    // 첫 번째 질문 (세안 후 상태)
    switch(quizAnswers[0]) {
        case 'dry':
            skinTypeScore.dry += 3;
            break;
        case 'normal':
            skinTypeScore.normal += 3;
            break;
        case 'oily':
            skinTypeScore.oily += 3;
            break;
        case 'combination':
            skinTypeScore.combination += 3;
            break;
    }
    
    // 두 번째 질문 (피부 고민)
    switch(quizAnswers[1]) {
        case 'acne':
            skinTypeScore.oily += 2;
            break;
        case 'aging':
            skinTypeScore.dry += 2;
            skinTypeScore.normal += 1;
            break;
        case 'sensitivity':
            skinTypeScore.sensitive += 3;
            break;
        case 'dullness':
            skinTypeScore.combination += 1;
            skinTypeScore.normal += 1;
            break;
    }
    
    // 세 번째 질문 (텍스처 선호도)
    switch(quizAnswers[2]) {
        case 'light':
            skinTypeScore.oily += 2;
            skinTypeScore.combination += 1;
            break;
        case 'rich':
            skinTypeScore.dry += 2;
            break;
        case 'gel':
            skinTypeScore.oily += 1;
            skinTypeScore.combination += 2;
            break;
        case 'cream':
            skinTypeScore.dry += 1;
            skinTypeScore.normal += 1;
            break;
    }
    
    // 가장 높은 점수의 피부타입 선택
    userSkinType = Object.keys(skinTypeScore).reduce((a, b) => 
        skinTypeScore[a] > skinTypeScore[b] ? a : b
    );
}

// 퀴즈 결과 표시
function showQuizResult() {
    const allQuestions = document.querySelectorAll('.quiz-question');
    allQuestions.forEach(q => q.classList.remove('active'));
    
    const resultElement = document.getElementById('quiz-result');
    const skinTypeText = document.getElementById('skin-type-text');
    const skinDescription = document.getElementById('skin-description');
    
    const skinTypeInfo = {
        dry: {
            name: "건성 피부",
            description: "수분이 부족하여 건조하고 당기는 느낌이 자주 드는 피부입니다. 충분한 보습이 필요합니다."
        },
        oily: {
            name: "지성 피부",
            description: "피지 분비가 활발하여 기름기가 많고 모공이 눈에 띄는 피부입니다. 유분 조절이 중요합니다."
        },
        combination: {
            name: "복합성 피부",
            description: "T존은 기름지고 볼은 건조한 복합성 피부입니다. 부위별 차별화된 케어가 필요합니다."
        },
        normal: {
            name: "중성 피부",
            description: "유수분 밸런스가 적절하여 큰 문제없이 건강한 상태의 피부입니다."
        },
        sensitive: {
            name: "민감성 피부",
            description: "외부 자극에 쉽게 반응하여 붉어지거나 따가운 증상이 나타나는 피부입니다. 순한 제품 사용이 중요합니다."
        }
    };
    
    skinTypeText.textContent = skinTypeInfo[userSkinType].name;
    skinDescription.textContent = skinTypeInfo[userSkinType].description;
    
    resultElement.classList.add('show');
    
    // 피부타입 필터 자동 설정
    document.getElementById('skin-filter').value = userSkinType;
}

// 맞춤 추천 제품 보기
function showRecommendations() {
    scrollToSection('recommendation');
    filterProducts();
}

// 섹션으로 스크롤
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 필터 설정
function setupFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const skinFilter = document.getElementById('skin-filter');
    const priceFilter = document.getElementById('price-filter');
    const searchInput = document.getElementById('search-input');
    
    categoryFilter.addEventListener('change', filterProducts);
    skinFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', debounce(filterProducts, 300));
    
    // 보기 방식 토글
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            viewBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const view = e.target.dataset.view;
            const productsGrid = document.getElementById('products-grid');
            
            if (view === 'list') {
                productsGrid.classList.add('list-view');
            } else {
                productsGrid.classList.remove('list-view');
            }
        });
    });
}

// 제품 필터링
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const skinType = document.getElementById('skin-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    currentProducts = cosmeticsData.filter(product => {
        let matches = true;
        
        // 카테고리 필터
        if (category && product.category !== category) {
            matches = false;
        }
        
        // 피부타입 필터
        if (skinType && !product.skinTypes.includes(skinType) && !product.skinTypes.includes('all')) {
            matches = false;
        }
        
        // 가격대 필터
        if (priceRange && product.priceRange !== priceRange) {
            matches = false;
        }
        
        // 검색어 필터
        if (searchTerm && 
            !product.name.toLowerCase().includes(searchTerm) &&
            !product.brand.toLowerCase().includes(searchTerm) &&
            !product.description.toLowerCase().includes(searchTerm)) {
            matches = false;
        }
        
        return matches;
    });
    
    // 피부타입이 설정된 경우 관련 제품을 상단에 배치
    if (userSkinType) {
        currentProducts.sort((a, b) => {
            const aMatch = a.skinTypes.includes(userSkinType) || a.skinTypes.includes('all');
            const bMatch = b.skinTypes.includes(userSkinType) || b.skinTypes.includes('all');
            
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            return b.rating - a.rating; // 평점 순
        });
    }
    
    displayedProducts = 6;
    displayProducts();
}

// 제품 표시
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    // 표시할 제품들
    const productsToShow = currentProducts.slice(0, displayedProducts);
    
    // 제품 카드 생성
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // 더보기 버튼 표시/숨김
    if (displayedProducts >= currentProducts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // 제품 카드 애니메이션
    animateProductCards();
}

// 제품 카드 생성
function createProductCard(product) {
    const isRecommended = userSkinType && (product.skinTypes.includes(userSkinType) || product.skinTypes.includes('all'));
    
    return `
        <div class="product-card ${isRecommended ? 'recommended' : ''}" data-product-id="${product.id}">
            ${isRecommended ? '<div class="recommended-badge">추천</div>' : ''}
            <div class="product-image">
                <span>${product.icon}</span>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-price">${product.price.toLocaleString()}원</div>
                <div class="product-tags">
                    ${product.skinTypes.map(type => `<span class="product-tag">${getSkinTypeKorean(type)}</span>`).join('')}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span class="rating-text">${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-description">${product.description}</div>
                <div class="product-actions">
                    <button class="btn-primary" onclick="addToWishlist(${product.id})">
                        <i class="fas fa-heart"></i> 찜하기
                    </button>
                    <button class="btn-secondary" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i> 상세보기
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 피부타입 한국어 변환
function getSkinTypeKorean(skinType) {
    const types = {
        'dry': '건성',
        'oily': '지성',
        'combination': '복합성',
        'normal': '중성',
        'sensitive': '민감성',
        'all': '모든피부'
    };
    return types[skinType] || skinType;
}

// 더 많은 제품 로드
function loadMoreProducts() {
    displayedProducts += 6;
    displayProducts();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 더보기 버튼
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }
    
    // 스크롤 이벤트
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // 네비게이션 링크
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// 제품 상세보기
function viewProduct(productId) {
    const product = cosmeticsData.find(p => p.id === productId);
    if (product) {
        alert(`${product.name} 상세 정보:\n\n${product.description}\n\n주요 성분: ${product.ingredients.join(', ')}\n평점: ${product.rating}/5`);
    }
}

// 찜하기 기능
function addToWishlist(productId) {
    const product = cosmeticsData.find(p => p.id === productId);
    if (product) {
        // 로컬 스토리지에 저장 (실제 구현에서는 서버에 저장)
        let wishlist = JSON.parse(localStorage.getItem('cosmetics_wishlist') || '[]');
        
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('cosmetics_wishlist', JSON.stringify(wishlist));
            alert(`${product.name}이(가) 찜 목록에 추가되었습니다!`);
        } else {
            alert('이미 찜 목록에 있는 제품입니다.');
        }
    }
}

// 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 애니메이션
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll('.tip-card, .product-card, .quiz-container');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 제품 카드 애니메이션
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 추천 제품 스타일링을 위한 CSS 추가
const style = document.createElement('style');
style.textContent = `
    .product-card.recommended {
        border: 2px solid var(--primary-color);
        position: relative;
    }
    
    .recommended-badge {
        position: absolute;
        top: -10px;
        right: 15px;
        background: var(--gradient-secondary);
        color: white;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 10;
    }
    
    .product-card.recommended::before {
        background: var(--gradient-secondary);
    }
`;
document.head.appendChild(style);