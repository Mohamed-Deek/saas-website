//* FAQ 
document.addEventListener('DOMContentLoaded', ()=>{
    const faqContent = document.querySelector('.faq-content');

    faqContent.addEventListener('click', (evt)=>{
        const groupHeader = evt.target.closest('.faq-group-header');
        
        if(!groupHeader) return;

        // faq-group
        const group = groupHeader.parentElement; 
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //* Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //* Toggle the visibility of body <faq-group-body>
        groupBody.classList.toggle('open');

        //! Close other FAQ bodies
        const otherGrops = faqContent.querySelectorAll('.faq-group');

        otherGrops.forEach((otherGrops)=>{
            if(otherGrops !== group){
                const otherGropsBody = otherGrops.querySelector('.faq-group-body');
                const otherIcons = otherGrops.querySelector('.faq-group-header i');

                otherGropsBody.classList.remove('open');
                otherIcons.classList.remove('fa-minus');
                otherIcons.classList.add('fa-plus');
            }
        });
    });
});


// * Mobile Menu
document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerMenu = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('active');
    })
});