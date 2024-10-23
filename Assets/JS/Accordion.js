document.querySelectorAll('.accordion-toggle').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();


        const allMenus = document.querySelectorAll('.menu-item');
        allMenus.forEach(menu => {
            if (menu !== this.parentElement) {
                menu.classList.remove('active');
            }
        });


        const parentItem = this.parentElement;
        parentItem.classList.toggle('active');
    });
});

document.querySelectorAll('.content-toggle').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const target = this.getAttribute('data-target');
        const columns = document.querySelectorAll('.column');

        if (target === 'new'){
            columns[0].innerHTML = `<h3>WEB MOTORS</h3>
                            <a href="https://www.webmotors.com.br/carros/estoque?lkid=1022&tipoveiculo=carros" target="_blank">Carros</a>
                            <br>
                            <a href="https://www.webmotors.com.br/motos/estoque?lkid=1022&tipoveiculo=motos" target="_blank">Motos</a>`;
            columns[1].innerHTML = ``;
            columns[2].innerHTML = ``;
            columns[3].innerHTML = ``;
            columns[4].innerHTML = ``;
        } else if (target === 'new1') {
            columns[0].innerHTML = `<h3>INSTAGRAM</h3>
                            <a href="https://www.instagram.com/" target="_blank">Instagram</a>`;
            columns[1].innerHTML = `<h3>FACEBOOK</h3>
                            <a href="https://web.facebook.com/" target="_blank">Facebook</a>`;
            columns[2].innerHTML = `<h3>X</h3>
                            <a href="https://x.com/" target="_blank">x</a>`;
            columns[3].innerHTML = `<h3>TIKTOK</h3>
                            <a href="https://www.tiktok.com/" target="_blank">TikTok</a>`;
            columns[4].innerHTML = `<h3>YOUTUBE</h3>
                            <a href="https://www.youtube.com/" target="_blank">Youtube</a>`;
        } else if (target === 'new2') {
            columns[0].innerHTML = `<h3>STEAM</h3>
                            <a href="https://store.steampowered.com/" target="_blank">Steam</a>`;
            columns[1].innerHTML = `<h3>EPIC GAMES</h3>
                            <a href="https://store.epicgames.com/" target="_blank">Epic games</a>`;
            columns[2].innerHTML = `<h3>UBI CONNECT</h3>
                            <a href="https://www.ubisoft.com/pt-br/ubisoft-connect" target="_blank">Ubi connect</a>`;
            columns[3].innerHTML = `<h3>BATTLE NET</h3>
                            <a href="https://us.shop.battle.net/" target="_blank">Battle net</a>`;
            columns[4].innerHTML = `<h3>EA APP</h3>
                            <a href="https://www.ea.com/" target="_blank">Ea app</a>`;
        } else if (target === 'new9') {
            columns[0].innerHTML = `<h3>CLARO</h3>
                            <a href="https://www.claro.com.br/" target="_blank">Claro</a>`;
            columns[1].innerHTML = `<h3>OI</h3>
                            <a href="https://www.oi.com.br/" target="_blank">Oi</a>`;
            columns[2].innerHTML = `<h3>VIVO</h3>
                            <a href="https://vivo.com.br/" target="_blank">Vivo</a>`;
            columns[3].innerHTML = `<h3>TIM</h3>
                            <a href="https://lojavirtualtim.com.br/" target="_blank">Tim</a>`;
            columns[4].innerHTML = `<h3>ALGAR</h3>
                            <a href="https://algartelecom.com.br/" target="_blank">Algar</a>`;
        } else if (target === 'new10') {
            columns[0].innerHTML = `<h3>Desenvolvedores</h3>
                            <a>Pedro Bittencourt</a>`;
            columns[1].innerHTML = ``;
            columns[2].innerHTML = ``;
            columns[3].innerHTML = ``;
            columns[4].innerHTML = ``;
        
        }else {
            columns[0].innerHTML = `<h3>OLX</h3>
                            <a href="https://www.olx.com.br/" target="_blank">Olx</a>`;
            columns[1].innerHTML = `<h3>MERCADO LIVRE</h3>
                            <a href="https://www.mercadolivre.com.br/" target="_blank">Mercado livre</a>`;
            columns[2].innerHTML = `<h3>ALIEXPRESS</h3>
                            <a href="https://pt.aliexpress.com/" target="_blank">Aliexpress</a>`;
            columns[3].innerHTML = `<h3>SHOPEE</h3>
                            <a href="https://shopee.com.br/" target="_blank">Shopee</a>`;
            columns[4].innerHTML = `<h3>SHEIN</h3>
                            <a href="https://br.shein.com/" target="_blank">Shein</a>`;
        }
    });
});