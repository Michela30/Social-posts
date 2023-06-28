const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://images.unsplash.com/photo-1568584251912-94f680370e75",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25",
        "isLiked": false
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://images.unsplash.com/photo-1552160793-cbaf3ebcba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03",
        "isLiked": false
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15",
        "isLiked": false
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null 
        },
        "likes": 56,
        "created": "2021-04-03",
        "isLiked": false
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05",
        "isLiked": false
    }
];


function refresh (){
    const container = document.getElementById('container');
    container.classList.add('posts-list')

    container.innerHTML = ''

    for(let i = 0; i < posts.length; i++){

        //crea img profilo account
        const imgProfile = `<img class="profile-pic" src="${posts[i]['author'].image}" alt="${posts[i]['author'].image}">`;
        
        //controllo chiave isliked
        let classeLiked = '';

        if(posts[i].isLiked) {
            classeLiked = 'like-button--liked';
        }
        const initialsElement = makeInitial(posts[i].author.name);   
        
        
        let newPost = `
        <div class="post">
        <div class="post__header">
        <div class="post-meta">                    
        <div class="post-meta__icon">`;

        //controllo se la image è null o no
        if(posts[i].author.image === null){
            newPost += initialsElement;
        }else{            
            newPost += imgProfile;
        }
       
        
        newPost += `
        </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i]['author'].name}</div>
                    <div class="post-meta__time">${posts[i].created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i].content}</div>
        <div class="post__image">
            <img src="${posts[i].media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button js-like-button ${classeLiked}" href="#" data-postid="${posts[i].id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `
    container.innerHTML += newPost;
        
    }

    const postsLiked = []; 

    document.querySelectorAll('.js-like-button')
        .forEach((likeButton, index) => {
            likeButton.addEventListener('click', function(e){
                e.preventDefault()

                
                if(!this.classList.contains('like-button--liked')){

                    // incrementa il contatore dei likes
                    posts[index].likes++;
                
                    // push nel nuovo array gli id dei post piacizzati
                    postsLiked.push[posts[index].id];
    
                }else{
                    posts[index].likes--;
                }
                
                posts[index].isLiked = !posts[index].isLiked;
                
                refresh();
            
            });
        })


}

refresh();

//functions


function makeInitial(name) {
    // split
    const splitName = name.split(' ');
    const nome = splitName[0];
    const cognome = splitName[1];
    const letter = nome.charAt(0);
    const letter2 = cognome.charAt(0);
    const letters = [letter,letter2];
    //join
    const joined = letters.join('');

    return `
        <div class="iniziali">
            <div>${joined}</div>
        </div>
    `
}
