document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
  
    const estiloLink = document.createElement('link');
    estiloLink.rel = 'stylesheet';
    estiloLink.href = 'css/footer-style.css';
    estiloLink.type = 'text/css';
    document.head.appendChild(estiloLink);

    const footer = document.createElement("footer");

    footer.innerHTML = 
      `<div class='informacoes' style='margin: auto;'>
        <div class='atendimento'>
          <h1>Время работы</h1>
          <p>Мы открыты с 10:00 до 22:00<br>
            по адресу Проспект победы 77, г.Калиниград.</p>
        </div>
        </div>
      </div>
      <div class='direitos'>
        <p></p>
      </div>`;
  
    footer.classList.add('footer');
  
    body.appendChild(footer);
  });
