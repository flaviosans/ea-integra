<?php 
  $unique_id = rand(0, 99999);
  $referer_id = 1234567890;
  $next_message = "Próximo";
  $previous_message = "Anterior";
  $api_url = "http://localhost:8080";
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Protótipo - Formulário de Orçamento</title>
  <meta name="description" content="Protótipo - Formulário de Orçamento">
  <meta name="author" content="Entenda Antes!">
  <link rel="stylesheet" href="css/styles.css?v=1.0">
</head>

<body>
    <form action="<?php echo $api_url ?>/budget" id="ea-form<?php echo $unique_id ?>" method="POST" onsubmit="handleFormSubmit(event, this)">
        <div class="step<?php echo $unique_id ?>">
            <input type="hidden" name="meta.refererId" value="<?php echo $referer_id ?>">
            <input type="hidden" name="meta.refererId" value="xxxxxxxxxxxx">
            CEP: <input type="text" name="zipCode" class="ea-masked-zipcode"><br>
            Cidade: <input type="text" name="city" id="city<?php echo $unique_id ?>"><br>
            Estado: <input type="text" name="state" id="state<?php echo $unique_id ?>"><br>
            IBGE: <input type="text" name="city.ibge" id="ibge<?php echo $unique_id ?>"><br>
            Nome: <input type="text" name="userApp.name"/><br>
            E-mail: <input type="text" name="userApp.email" class="ea-masked-email"/><br>
            Telefone: <input type="text" name="userApp.phone" class="ea-masked-phone"><br>
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Categoria:<br>
            <input type="radio" name="budgetCategory.id" value="1"> Primeira<br>
            <input type="radio" name="budgetCategory.id" value="2"> Segunda<br>
            <input type="radio" name="budgetCategory.id" value="3"> Terceira<br>
            <button onclick="showMoreCategories()" id="ea-button-more-categories<?php echo $unique_id ?>">Mais... </button><br>
            <div id="ea-div-more-categories<?php echo $unique_id ?>" class="ea-hidden">
                <input type="radio" name="budgetCategory.id" value="4"> Complementar<br>
                <input type="radio" name="budgetCategory.id" value="5"> Outro complementar<br>
                <input type="radio" name="budgetCategory.id" value="6"> Mais um complementar<br>
                <input type="radio" name="budgetCategory.id" value="7"> Another<br>
                <input type="radio" name="budgetCategory.id" value="8"> One more time<br>
                <button id="ea-div-less-categories<?php echo $unique_id ?>" onclick="showLessCategories()">Menos</button><br>
            </div>
            <input type="hidden" name="budgetSubCategory.id" value="79">
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Tipo de imóvel:<br>
            <input type="radio" name="questions.propertyType" value="residence"> Residencial<br>
            <input type="radio" name="questions.propertyType" value="trade"> Comercial<br>
            <input type="radio" name="questions.propertyType" value="industry"> Industrial<br>
            <input type="radio" name="questions.propertyType" value="other"> Outro<br>
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Quando pretende começar:<br>
            <input type="radio" name="questions.start" value="afap"> O mais rápido possível<br>
            <input type="radio" name="questions.start" value="from_1_to_3_months"> Entre 1 e 3 meses<br>
            <input type="radio" name="questions.start" value="more_than_3_months"> Daqui a mais que 3 meses<br>
            <input type="radio" name="questions.start" value="dont_know"> Ainda não sei<br>
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Título: (Tirar esse campo?)<br>
            <input type="text" name="title"/><br>
            Descrição: (melhorar esse nome)<br>
            <textarea name="description"></textarea><br>
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Melhor horário para contato:<br>
            <input type="radio" name="questions.contact_hour" value="morning"> Manhã<br>
            <input type="radio" name="questions.contact_hour" value="afternoon"> Tarde<br>
            <input type="radio" name="questions.contact_hour" value="night"> Noite<br>
            O pedido é para:<br>
            <input type="radio" name="questions.person_type" value="pf"> Pessoa Física<br>
            <input type="radio" name="questions.person_type" value="pj"> Pessoa Jurídica<br>
            <a><?php echo $next_message ?></a>
        </div>
        <div class="step<?php echo $unique_id ?>">
            Interesse:<br>
            <input type="radio" name="meta.interest" value="saber_apenas_precos_a_fim_de_comparacao">
            Saber apenas preços a fim de comparação<br>
            <input type="radio" name="meta.interest" value="tirar_duvidas_para_saber_melhor_o_que_desejo_fazer">
            Tirar dúvidas para saber melhor o que desejo fazer<br>
            <input type="radio" name="meta.interest" value="negociar_a_execucao_do_servico_com_um_profissional">
            Negociar a execução do serviço com um profissional<br>
            Estimativa de investimento:<br>
            <input type="radio" name="estimatedPrice" value="1">
            R$ 20 mil<br>
            <input type="radio" name="estimatedPrice" value="2">
            R$ 40 mil<br>
            <input type="radio" name="estimatedPrice" value="3">
            R$ 60 mil<br>
            <input type="radio" name="estimatedPrice" value="4">
            R$ 80 mil<br>
        </div>
        <input id="sss" type="submit"><br>
    </form>
  <script src="js/inputmask.js"></script>
  <script src="js/scripts.js"></script>
  <script src="js/masklisteners.js"></script>
</body>
</html>