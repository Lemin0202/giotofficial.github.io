// Xử lý chức năng tìm kiếm và các biểu tượng
document.addEventListener('DOMContentLoaded', function() {
    // Các phần tử tìm kiếm
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    const searchClose = document.querySelector('.search-close');
    
    // Xử lý chức năng tìm kiếm
    if (searchInput && searchIcon && searchClose) {
        // Xử lý khi nhấp vào biểu tượng tìm kiếm
        searchIcon.addEventListener('click', function() {
            searchInput.focus();
        });
        
        // Xử lý khi nhấp vào biểu tượng đóng
        searchClose.addEventListener('click', function() {
            searchInput.value = '';
            searchInput.blur();
        });
        
        // Xử lý khi nhấn Enter trong ô tìm kiếm
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(searchInput.value);
            }
        });
        
        // Xử lý khi ô tìm kiếm nhận focus
        searchInput.addEventListener('focus', function() {
            searchIcon.style.display = 'none';
            searchClose.style.display = 'block';
        });
        
        // Xử lý khi ô tìm kiếm mất focus
        searchInput.addEventListener('blur', function() {
            if (searchInput.value === '') {
                searchIcon.style.display = 'block';
                searchClose.style.display = 'none';
            }
        });
    }
    
    // Hàm thực hiện tìm kiếm
    function performSearch(query) {
        if (query.trim() === '') return;
        
        // Đây là nơi bạn sẽ thêm logic tìm kiếm thực tế
        console.log('Đang tìm kiếm:', query);
        
        // Ví dụ: chuyển hướng đến trang kết quả tìm kiếm
        // window.location.href = 'search-results.html?q=' + encodeURIComponent(query);
        
        // Hoặc hiển thị kết quả tìm kiếm trực tiếp trên trang
        alert('Đang tìm kiếm: ' + query);
    }
    
    // Thêm hiệu ứng khi cuộn trang
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.new-header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
                header.style.padding = '10px 0';
            } else {
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
                header.style.padding = '15px 0';
            }
        }
    });
}); 