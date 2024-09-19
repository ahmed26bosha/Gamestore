function show_pop(){
    document.querySelectorAll(' .details').forEach(item=>{
    item.addEventListener('click',(ele)=>{
    console.log(ele.target.parentElement.nextElementSibling) 
    ele.target.parentElement.nextElementSibling.classList.add('open')
    ele.target.parentElement.nextElementSibling.nextElementSibling.classList.add('open')
    })})
  }
  
  show_pop()
  function hide_pop() {
  
  document.querySelectorAll(' .close').forEach(item=>{
    
    item.addEventListener('click',(ele)=>{
        
    ele.target.parentElement.classList.remove('open')
    ele.target.parentElement.previousElementSibling.classList.remove('open')
    })})
  }
  hide_pop()
  const games = [
    "Mass Effect",
    "لعبة 2",
    "لعبة 3",
    "لعبة 4",
    "لعبة 5",
    // يمكنك إضافة المزيد من الألعاب هنا
];

function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = ''; // امسح الاقتراحات السابقة

    if (value) {
        const filteredGames = games.filter(game => game.toLowerCase().includes(value.toLowerCase()));
        
        if (filteredGames.length > 0) {
            suggestions.style.display = 'block'; // عرض الاقتراحات
            filteredGames.forEach(game => {
                const div = document.createElement('div');
                div.textContent = game;
                div.onclick = () => selectSuggestion(game); // إضافة حدث النقر
                suggestions.appendChild(div);
            });
        } else {
            suggestions.style.display = 'none'; // أخفها إذا لم توجد اقتراحات
        }
    } else {
        suggestions.style.display = 'none'; // أخفها إذا كان الحقل فارغًا
    }
}

function selectSuggestion(game) {
    document.getElementById('search-input').value = game; // ضع اللعبة المحددة في حقل الإدخال
    document.getElementById('suggestions').style.display = 'none'; // أخف الاقتراحات
}