

// ===== faq ====================
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("fqactive");
    });
});

// responxive
$('#menu_bar').click(function(){
    $('header .navbar ul').addClass('sidebar')
});

$('#close_btn').click(function(){
    $('header .navbar ul').removeClass('sidebar')
});