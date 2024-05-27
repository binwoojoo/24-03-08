// 서버 URL
const URL = "https://yts.mx/api/v2/list_movies.json";

const $movieList = document.querySelector(".movie-list");

// 화면에 게시물을 렌더링하는 함수
const renderMovies = movies => {
    $movieList.innerHTML = '';  // 기존 영화 목록 초기화

    movies.forEach(movie => {
        // 템플릿 태그 가져오기
        const $template = document.querySelector("#movie-template");
        const $movie = document.importNode($template.content, true);

        const $img = $movie.querySelector(".img-box img");
        $img.src = movie.large_cover_image;
        $img.alt = movie.title;
        $img.dataset.movieId = movie.id;  // 모달에서 사용할 데이터 속성 추가

        const $inner = $movie.querySelector(".inner");
        $inner.querySelector(".title").textContent = movie.title;
        $inner.querySelector(".year").textContent = movie.year;
        $inner.querySelector(".rating").textContent = movie.rating;

        // 템플릿 태그에서 li태그 추출하여 ul에 추가
        $movieList.appendChild($movie);
    });
    
    // 이미지 클릭 이벤트 추가
    document.querySelectorAll('.img-box img').forEach(img => {
        img.addEventListener('click', event => {
            const movieId = event.target.dataset.movieId;
            showMovieDetails(movieId);
        });
    });
};

// 영화 세부 정보를 모달 창에 표시하는 함수
const showMovieDetails = movieId => {
    fetch(`${URL}?movie_id=${movieId}`)
        .then(res => res.json())
        .then(json => {
            const movie = json.data.movie;
            const $modalTitle = document.querySelector('.modal-title');
            const $modalImage = document.querySelector('.desc-image');
            const $modalDescription = document.querySelector('.movie-description');

            $modalTitle.textContent = movie.title;
            $modalImage.src = movie.large_cover_image;
            $modalDescription.textContent = movie.description_full;

            // 모달 창 표시
            const modal = new bootstrap.Modal(document.getElementById('detailModal'));
            modal.show();
        })
        .catch(error => console.error('Error:', error));
};

// 서버에서 게시물 정보 받아오기
fetch(URL)
    .then((res) => res.json())
    .then((json) => {
        if (json.data && json.data.movies) {
            renderMovies(json.data.movies);
        }
    })
    .catch(error => console.error('Error:', error));
