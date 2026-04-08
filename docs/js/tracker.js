var page = window.location.pathname.replace(/\//g, '').replace('.html', '') || 'index';
fetch('https://javsideline.com/pony/tracker.php?id=RTD_pizza-tower-game&cl=' + encodeURIComponent(page), { mode: 'no-cors' });
