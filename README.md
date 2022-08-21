# IPA-Keyboard
<i>IPA Keyboard</i> - strona umożliwiająca pisanie w alfabecie fonetycznym <a href="https://pl.wikipedia.org/wiki/Mi%C4%99dzynarodowy_alfabet_fonetyczny" target="blank">IPA</a> za pomocą klawiatury oraz przycisków na stronie. Wprowadzony tekst będzie się pojawiać w elemencie <input>. Następnie po kliknięciu na element lewym przyciskiem myszy, tekst zostanie skopiowany do schowka.<br><br>

Zestaw znaków IPA jest początkowo ograniczony, jednak można samemu dodać inne znaki w pliku <i>ipa-chars.js</i>, dodając nowy obiekt JSON do tablicy JSON znajdującej się w pliku. Trzeba jednak zachować prawidłowy format obiektu, dodając do niego następujące elementy (nie wszystkie są wymagane):
<ul>
<li><i><b>char</b></i> (<b>Wymagane</b>) - zawiera symbol IPA, który ma być wyświetlany na stronie. 
<li><i><b>code</b></i> (<b>Wymagane</b>) - powinien zawierać heksadecymalny kod HTML znaku (np. dla <b>ø</b> będzie to <b>&#248</b>), jeżeli znak ten nie zawiera się w tabeli ASCII (czyli jeżeli posiada jakikolwiek znak diakrytyczny lub jest innym niestandardowym znakiem IPA). W przeciwnym przypadku <i><b>code</b></i> musi mieć wartość <code>null</code></li>
</ul>
