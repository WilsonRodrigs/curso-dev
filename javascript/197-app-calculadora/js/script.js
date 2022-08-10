function calcular(tipo,valor){

	if (tipo === "acao") {
		//verifica se o valor é = c
		if (valor === "c") {
			//limpar visor
			document.getElementById("resultado").value = ""
		}

		//verifica a operação
		if (valor === "+" || valor === "-" || valor === "*" ||valor === "/") {
			//concatenar ao valor exibido ao resultado
			document.getElementById("resultado").value += valor
		}
			//se o operador for '=' inicia a operação
		if (valor=== "=") {
		 var valor_campo = document.getElementById("resultado").value
		 document.getElementById("resultado").value = eval(valor_campo)
		}

		

	}else if (tipo === "valor") {
		document.getElementById("resultado").value += valor
	}


//console.log(tipo, valor)
}