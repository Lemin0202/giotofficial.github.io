// Danh sách sản phẩm tinh dầu
const products = [
    {
        name: "Bạc Hà Lục",
        description: "Tinh dầu bạc hà lục mang hương thơm the mát, sảng khoái",
        url: "bachaluc.html",
        image: "images/hieu_hoc.png"
    },
    {
        name: "Hoa Nhài",
        description: "Tinh dầu hoa nhài với hương thơm dịu ngọt, thư giãn",
        url: "hoanhai.html",
        image: "images/hung_dua.jpg"
    },
    {
        name: "Hoa Trà",
        description: "Tinh dầu hoa trà với hương thơm thanh tao, tinh tế",
        url: "hoatra.html",
        image: "images/phu_quy.jpg"
    },
    {
        name: "Gỗ Pơ Mu",
        description: "Tinh dầu gỗ pơ mu mang hương gỗ ấm áp, sang trọng",
        url: "gopomu.html",
        image: "images/uy_tran_Son_ha.png"
    },
    {
        name: "Sả Chanh",
        description: "Tinh dầu sả chanh với hương thơm thanh mát, sảng khoái",
        url: "sachanh.html",
        image: "images/ga_da_xuong.png"
    },
    {
        name: "Gỗ Thông Trắng",
        description: "Tinh dầu gỗ thông trắng mang hương gỗ nhẹ nhàng, tươi mới",
        url: "gothongtrang.html",
        image: "images/văn_minh_tien_bo.png"
    },
    {
        name: "Hương Nhu",
        description: "Tinh dầu hương nhu với hương thơm đặc trưng của thảo mộc",
        url: "huongnhu.html",
        image: "images/nong_su_khai_co.png"
    },
    {
        name: "Hương Thảo",
        description: "Tinh dầu hương thảo mang hương thơm thảo mộc, sảng khoái",
        url: "huongthao.html",
        image: "images/dinh_tai_tuong_vuong.png"
    },
    {
        name: "Sen",
        description: "Tinh dầu sen với hương thơm tinh khiết, thanh tao",
        url: "sen.html",
        image: "images/nhan_nghia.png"
    },
    {
        name: "Trà Trắng",
        description: "Tinh dầu trà trắng mang hương thơm nhẹ nhàng, tinh tế",
        url: "tratrang.html",
        image: "images/o_to.png"
    },
    {
        name: "Vỏ Bưởi",
        description: "Tinh dầu vỏ bưởi với hương thơm tươi mát, sảng khoái",
        url: "vobuoi.html",
        image: "images/may_bay.png"
    },
    {
        name: "Gỗ Hồng",
        description: "Tinh dầu gỗ hồng mang hương thơm ấm áp, sang trọng",
        url: "gohong.html",
        image: "images/tay_du_ky.png"
    }
];

// Tạo và hiển thị kết quả tìm kiếm
function createSearchResult(product) {
    return `
        <div class="search-result-item" onclick="window.location.href='${product.url}'">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `;
}

// Xử lý tìm kiếm
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const searchClose = document.querySelector('.search-close');
    let searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results';
    document.querySelector('.search-container').appendChild(searchResultsContainer);

    // Xử lý khi nhập từ khóa tìm kiếm
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        if (searchTerm.length > 0) {
            searchClose.style.display = 'block';
            searchResultsContainer.style.display = 'block';
            
            // Lọc sản phẩm theo từ khóa
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );

            // Hiển thị kết quả
            if (filteredProducts.length > 0) {
                searchResultsContainer.innerHTML = filteredProducts
                    .map(product => createSearchResult(product))
                    .join('');
            } else {
                searchResultsContainer.innerHTML = '<div class="no-results">Không tìm thấy sản phẩm nào</div>';
            }
        } else {
            searchClose.style.display = 'none';
            searchResultsContainer.style.display = 'none';
        }
    });

    // Xử lý nút đóng tìm kiếm
    searchClose.addEventListener('click', function() {
        searchInput.value = '';
        searchClose.style.display = 'none';
        searchResultsContainer.style.display = 'none';
    });

    // Đóng kết quả tìm kiếm khi click ra ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResultsContainer.style.display = 'none';
        }
    });
}); 