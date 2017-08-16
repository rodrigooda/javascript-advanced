var mbind = (function (mbind) {

    function code() {
        //fun.apply(thisArg, [argsArray])
        //Apply  adiciona temporariamente uma função a um metodo porém os argumentos são um array
        var obj = {
            num: 2
        };
        var addToThis = function (a, b, c) {
            return this.num + a + b + c;
        };
        var arr = [2, 2, 3];
        print(addToThis.apply(obj, arr));
    };

    function print(value) {
        var br = document.createElement("br");
        $("#result").append(value);
        $("#result").append(br);
    }

    function init() {
        var codeS = code.toString();
        var codeS = codeS.substring(codeS.indexOf('{') + 1, codeS.lastIndexOf('}'));
        $("#code").append(codeS);
        $("#title").append("Método Bind");
        $("#definition").append("O metodos bind() cria uma nova função que, quando chamada, tem seu parametro (ref mesmo objeto) this, podendo vincular ou inciar com a outros parametros definidos, dada sequência dos argumentos que foram fornecidos quando a nova função é chamada .")
    };
    mbind.code = code;
    mbind.init = init;
    return mbind;
})(mbind || {});
