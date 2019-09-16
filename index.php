<?php 
  $unique_id = 'n555';
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
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            <div>Preencha seu CEP:</div>
            <input type="hidden" name="meta.refererId" value="<?php echo $referer_id ?>">
            CEP: <input type="text" name="zipCode" class="ea-field ea-masked-zipcode"><br>
            Cidade: <input type="text" name="city" class="ea-field ea-optional-field" id="city<?php echo $unique_id ?>"><br>
            Estado: <input type="text" name="state" class="ea-field ea-optional-field" id="state<?php echo $unique_id ?>"><br>
            <input type="hidden" name="meta.city.ibge"  class="ea-field ea-optional-field" id="ibge<?php echo $unique_id ?>" value="000000">
            Nome: <input type="text" name="userApp.name" class="ea-field"/><br>
            E-mail: <input type="text" name="userApp.email" class="ea-field ea-masked-email"/><br>
            Telefone: <input type="text" name="userApp.phone" class="ea-field ea-masked-phone"><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            <div>Categoria:</div>
            <input class="ea-field" type="radio" name="budgetCategory.id" value="1"> Primeira<br>
            <input class="ea-field" type="radio" name="budgetCategory.id" value="2"> Segunda<br>
            <input class="ea-field" type="radio" name="budgetCategory.id" value="3"> Terceira<br>
            <a onclick="showMoreCategories('<?php echo $unique_id ?>')" id="ea-button-more-categories<?php echo $unique_id ?>">Mais... </a><br>
            <div id="cat<?php echo $unique_id ?>" class="ea-hidden">
                <input class="ea-field" type="radio" name="budgetCategory.id" value="4"> Complementar<br>
                <input class="ea-field" type="radio" name="budgetCategory.id" value="5"> Outro complementar<br>
                <input class="ea-field" type="radio" name="budgetCategory.id" value="6"> Mais um complementar<br>
                <input class="ea-field" type="radio" name="budgetCategory.id" value="7"> Another<br>
                <input class="ea-field" type="radio" name="budgetCategory.id" value="8"> One more time<br>
                <a id="hideCat<?php echo $unique_id ?>" onclick="showLessCategories('<?php echo $unique_id ?>')">Menos</a><br>
            </div>
            <input class="ea-field" type="hidden" name="budgetSubCategory.id" value="79">
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            Tipo de imóvel:<br>
            <input class="ea-field" type="radio" name="questions.propertyType" value="residence"> Residencial<br>
            <input class="ea-field" type="radio" name="questions.propertyType" value="trade"> Comercial<br>
            <input class="ea-field" type="radio" name="questions.propertyType" value="industry"> Industrial<br>
            <input class="ea-field" type="radio" name="questions.propertyType" value="other"> Outro<br>
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            Quando pretende começar:<br>
            <input class="ea-field" type="radio" name="questions.start" value="afap"> O mais rápido possível<br>
            <input class="ea-field" type="radio" name="questions.start" value="from_1_to_3_months"> Entre 1 e 3 meses<br>
            <input class="ea-field" type="radio" name="questions.start" value="more_than_3_months"> Daqui a mais que 3 meses<br>
            <input class="ea-field" type="radio" name="questions.start" value="dont_know"> Ainda não sei<br>
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            Título: (Tirar esse campo?)<br>
            <input class="ea-field" type="text" name="title"/><br>
            Descrição: (melhorar esse nome)<br>
            <textarea class="ea-field" name="description"></textarea><br>
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            Melhor horário para contato:<br>
            <input class="ea-field" type="radio" name="questions.contact_hour" value="morning"> Manhã<br>
            <input class="ea-field" type="radio" name="questions.contact_hour" value="afternoon"> Tarde<br>
            <input class="ea-field" type="radio" name="questions.contact_hour" value="night"> Noite<br>
            O pedido é para:<br>
            <input class="ea-field" type="radio" name="questions.person_type" value="pf"> Pessoa Física<br>
            <input class="ea-field" type="radio" name="questions.person_type" value="pj"> Pessoa Jurídica<br>
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a><br>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-warning">Confira os campos</div>
            <br>Interesse:<br>
            <input class="ea-field" type="radio" name="meta.interest" value="saber_apenas_precos_a_fim_de_comparacao">
            Saber apenas preços a fim de comparação<br>
            <input class="ea-field" type="radio" name="meta.interest" value="tirar_duvidas_para_saber_melhor_o_que_desejo_fazer">
            Tirar dúvidas para saber melhor o que desejo fazer<br>
            <input class="ea-field" type="radio" name="meta.interest" value="negociar_a_execucao_do_servico_com_um_profissional">
            Negociar a execução do serviço com um profissional<br>
            Estimativa de investimento:<br>
            <input class="ea-field" type="radio" name="estimatedPrice" value="1"> R$ 20 mil<br>
            <input class="ea-field" type="radio" name="estimatedPrice" value="2"> R$ 40 mil<br>
            <input class="ea-field" type="radio" name="estimatedPrice" value="3"> R$ 60 mil<br>
            <input class="ea-field" type="radio" name="estimatedPrice" value="4"> R$ 80 mil<br>
            <a onclick="prev('step<?php echo $unique_id ?>')">previous</a>
            <a onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a><br>
            <button class="ea-hidden ea-button ea-submit" type="submit" value="Vai cachorro"><br>
        </div>
        <div class="ea-step step<?php echo $unique_id ?>">
            <div class="ea-wait">Aguarde, estamos gravando a sua solicitação...</div>
            <div class="ea-success ea-hidden">Obrigado pelo orçamento! <br> 
            <a onclick="validateStep('step<?php echo $unique_id ?>')">Quero fazer outro orçamento!</a><br>
        </div>
    </form>
  <script src="js/inputmask.js"></script>
  <script src="js/listeners.js"></script>
  <script src="js/core.js"></script>
</body>
</html>