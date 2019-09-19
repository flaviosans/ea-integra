<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Protótipo - Formulário de Orçamento</title>
  <meta name="description" content="Protótipo - Formulário de Orçamento">
  <meta name="author" content="Entenda Antes!">
  <link rel="stylesheet" href="css/styles.css?v=1.0">
    <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css">
</head>

<body>

<?php 
  $unique_id = 'n555';
  $referer_id = 1234567890;
  $next_message = "Próximo";
  $prev_message = "Anterior";
  $api_url = "http://localhost:8080";

  // Elemento que vai conter o grid
  $css_container = "container";
  $css_row = "row";
  $css_form = "";
  // Botão padrão
  $css_default_button = "button primary";
  $css_primary_button = "button primary";
  // Botão 'anterior'
  $css_prev_button = $css_primary_button;
  // Botão 'próximo'
  $css_next_button = $css_primary_button;
  // Para coluna de linha inteira
  $css_full_grid = "col-sm-12 col-md-12";
  // Div do Input do formulário
  $css_form_group = "form-group";
  $css_button_group = $css_form_group;
  $css_checkbox = "button primary";
  $css_radio = "button primary";
  $css_radio_grid = "col-sm-6 col-md-6";
  $css_form_control = "form-control";

  $css_step = $css_container;

?>

<style>
    .ea-field[type="radio"] {
        display: none;
    }
    .ea-field[type="radio"]:checked+label {
        background-color: #FF7700;
    }
</style>


<form  class="<?php echo $css_form ?>" action="<?php echo $api_url ?>/budget" id="ea-form<?php echo $unique_id ?>" method="POST" onsubmit="handleFormSubmit(event, this)">
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content <?php echo $css_row ?>">
            <div class="ea-step-title <?php echo $css_full_grid ?>">
                <span>CEP, e endereço</span>
                <div class="ea-warning">Confira os campos</div>
            </div>
            <input type="hidden" name="meta.refererId" value="<?php echo $referer_id ?>">
            <input type="hidden" name="meta.city.ibge"  class="ea-field ea-optional-field" id="ibge<?php echo $unique_id ?>" value="000000">

            <div class="<?php echo $css_form_group ?>">
                <label for="zipCode">CEP:</label><br>
                <input type="text" name="zipCode" class="ea-field ea-masked-zipcode <?php echo $css_form_control ?>">
            </div>

            <div class="<?php echo $css_form_group ?>">
                <label for="city"  class="col-sm-3">Cidade:</label><br>
                <input type="text" name="city" class="ea-field ea-optional-field <?php echo $css_form_control ?>" id="city<?php echo $unique_id ?>">
            </div>
            <div class="<?php echo $css_form_group ?>">
                <label for="state" class="col-sm-3">Estado:</label><br>
                <input type="text" name="state" class="ea-field ea-optional-field  <?php echo $css_form_control ?>" id="state<?php echo $unique_id ?>">
            </div>
            <div class="<?php echo $css_form_group ?>">
                <label for="userApp.name" class="col-sm-3">Nome:</label><br>
                <input type="text" name="userApp.name" class="ea-field <?php echo $css_form_control ?>"/>
            </div>
            <div class="<?php echo $css_form_group ?>">
                <label for="userApp.email">E-mail:</label><br>
                <input type="text" name="userApp.email" class="ea-field ea-masked-email <?php echo $css_form_control ?>"/>
            </div>
            <div class="<?php echo $css_form_group ?>">
                <label for="userApp.phone">Telefone:</label><br>
                <input type="text" name="userApp.phone" class="ea-field ea-masked-phone  <?php echo $css_form_control ?>">
            </div>
        </div>

        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
            </div>
        </div>

    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title">
                <span>Categoria</span>
                <div class="ea-warning">Confira os campos</div>
            </div>
            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input class="ea-field" id="budgetCategory.id.1<?php echo $unique_id ?>" type="radio" name="budgetCategory.id" value="1">
                    <label for="budgetCategory.id.1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">
                        Label 1
                    </label>
                </div>

                <div class="<?php echo $css_radio_grid ?>">
                    <input class="ea-field" id="budgetCategory.id.2<?php echo $unique_id ?>" type="radio" name="budgetCategory.id" value="2">
                    <label for="budgetCategory.id.2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">
                        Label 2
                    </label>
                </div>

                <div class="<?php echo $css_radio_grid ?>">
                    <input class="ea-field" id="budgetCategory.id.3<?php echo $unique_id ?>" type="radio" name="budgetCategory.id" value="3">
                    <label for="budgetCategory.id.3<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">
                        Label 3
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <label class="<?php echo $css_radio ?>">
                        <a  onclick="switchCategories('<?php echo $unique_id ?>', this)" id="ea-button-more-categories<?php echo $unique_id ?>">Mais... </a>
                    </label>
                </div>
            </div>

            <div id="ea-hidden-cats<?php echo $unique_id ?>" class="ea-hidden">
                    <div class="<?php echo $css_row ?>">
                        <div class="<?php echo $css_radio_grid ?>">
                            <input id="budgetCategory.id.4<?php echo $unique_id ?>" class="ea-field" type="radio" name="budgetCategory.id" value="4">
                            <label for="budgetCategory.id.4<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">Complementar</label>
                        </div>
                        <div class="<?php echo $css_radio_grid ?>">
                            <input id="budgetCategory.id.5<?php echo $unique_id ?>" class="ea-field" type="radio" name="budgetCategory.id" value="5">
                            <label for="budgetCategory.id.5<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Outro complementar
                            </label>
                        </div>
                        <div class="<?php echo $css_radio_grid ?>">
                                <input id="budgetCategory.id.6<?php echo $unique_id ?>" class="ea-field" type="radio" name="budgetCategory.id" value="6">
                            <label for="budgetCategory.id.6<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Mais um complementar
                            </label>
                        </div>
                        <div class="<?php echo $css_radio_grid ?>">
                                <input id="budgetCategory.id.7<?php echo $unique_id ?>" class="ea-field" type="radio" name="budgetCategory.id" value="7">
                            <label for="budgetCategory.id.7<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Another
                            </label>
                        </div>
                        <div class="<?php echo $css_radio_grid ?>">
                                <input id="budgetCategory.id.8<?php echo $unique_id ?>" class="ea-field" type="radio" name="budgetCategory.id" value="8">
                            <label for="budgetCategory.id.8<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> One more time
                            </label>
                        </div>
                    </div>
                </div>
            <input class="ea-field" type="hidden" name="budgetSubCategory.id" value="79">
            </div>

            <div class="<?php echo $css_button_group ?>">
                <div class="<?php echo $css_prev_button ?>">
                    <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
                </div>
                <div class="<?php echo $css_next_button ?>">
                    <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
                </div>
            </div>
        </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title">
                <span>Tipo de imóvel:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>

            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="propType1<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.propertyType" value="residence">
                    <label for="propType1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Residencial
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="propType2<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.propertyType" value="trade">
                    <label for="propType2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">  Comercial</label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="propType3<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.propertyType" value="industry">
                    <label for="propType3<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Industrial</label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="propType4<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.propertyType" value="other">
                    <label for="propType4<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Outro</label>
                </div>
            </div>
        </div>

        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
            </div>
        </div>
    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title">
                <span>Quando pretende começar:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>
            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="start1<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.start" value="afap">
                    <label for="start1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> O mais rápido possível
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="start2<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.start" value="from_1_to_3_months">
                    <label for="start2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Entre 1 e 3 meses
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="start3<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.start" value="more_than_3_months">
                    <label for="start3<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Daqui a mais que 3 meses
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="start4<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.start" value="dont_know">
                    <label for="start4<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Ainda não sei
                    </label>
                </div>
            </div>
        </div>
        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
            </div>
        </div>
    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title">
                <span>Agora nos diga o que você precisa</span>
                <div class="ea-warning">Confira os campos</div>
            </div>
            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_form_group?>">
                    <label>Título: (melhorar esse nome)</label><br>
                    <input class="<?php echo $css_form_control ?>" type="text" name="title" placeholder="Ex.: quero reformar meu escritório"/>
                </div>
                <div class="<?php echo $css_full_grid?>">
                    <label for="">Descrição: (melhorar esse nome)</label><br>
                    <textarea class="<?php echo $css_form_control ?>" name="description" placeholder="Adicione os detalhes que você gostaria de explicar para o profissional. Quanto mais informações, melhor e mais rápida será a resposta!"></textarea>
                </div>
            </div>
        </div>

        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
            </div>
        </div>
    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title <?php echo $css_full_grid ?>">
                <span>Melhor horário para contato:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>

            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="contm<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.contact_hour" value="morning">
                    <label for="contm<?php echo $unique_id ?>"class="<?php echo $css_radio ?>"> Manhã
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="conta<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.contact_hour" value="afternoon">
                    <label for="conta<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Tarde
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="contn<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.contact_hour" value="night">
                    <label for="contn<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Noite
                    </label>
                </div>
            </div>

            <div class="ea-step-title <?php echo $css_full_grid ?>">
                <span>O pedido é para:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>

            <div class="<?php echo $css_radio_grid?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="ptype1<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.person_type" value="pf">
                    <label for="ptype1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Pessoa Física
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="ptype2<?php echo $unique_id ?>" class="ea-field" type="radio" name="questions.person_type" value="pj">
                    <label for="ptype2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> Pessoa Jurídica
                    </label>
                </div>
            </div>
        </div>

        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
            </div>
        </div>
    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-step-content">
            <div class="ea-step-title <?php echo $css_full_grid ?>">
                <span>Interesse:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>

            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="interest1<?php echo $unique_id ?>" class="ea-field" type="radio" name="meta.interest" value="saber_apenas_precos_a_fim_de_comparacao">
                    <label for="interest1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">Saber apenas preços a fim de comparação
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="interest2<?php echo $unique_id ?>" class="ea-field" type="radio" name="meta.interest" value="tirar_duvidas_para_saber_melhor_o_que_desejo_fazer">
                    <label for="interest2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">
                        Tirar dúvidas para saber melhor o que desejo fazer
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="interest3<?php echo $unique_id ?>" class="ea-field" type="radio" name="meta.interest" value="negociar_a_execucao_do_servico_com_um_profissional">
                    <label for="interest3<?php echo $unique_id ?>" class="<?php echo $css_radio ?>">
                        Negociar a execução do serviço com um profissional
                    </label>
                </div>
            </div>

            <div class="ea-step-title <?php echo $css_full_grid ?>">
                <span>Estimativa de investimento:</span>
                <div class="ea-warning">Confira os campos</div>
            </div>
            <div class="<?php echo $css_row ?>">
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="est1<?php echo $unique_id ?>" class="ea-field" type="radio" name="estimatedPrice" value="1">
                    <label for="est1<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> R$ 20 mil
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="est2<?php echo $unique_id ?>" class="ea-field" type="radio" name="estimatedPrice" value="2">
                    <label for="est2<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> R$ 40 mil
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="est3<?php echo $unique_id ?>" class="ea-field" type="radio" name="estimatedPrice" value="3">
                    <label for="est3<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> R$ 60 mil
                    </label>
                </div>
                <div class="<?php echo $css_radio_grid ?>">
                    <input id="est4<?php echo $unique_id ?>" class="ea-field" type="radio" name="estimatedPrice" value="4">
                    <label for="est4<?php echo $unique_id ?>" class="<?php echo $css_radio ?>"> R$ 80 mil
                    </label>
                </div>
            </div>
        </div>
        <div class="<?php echo $css_button_group ?>">
            <div class="<?php echo $css_prev_button ?>">
                <a class="<?php echo $css_prev_button ?>" onclick="prev('step<?php echo $unique_id ?>')"><?php echo $prev_message ?></a>
            </div>
            <div class="<?php echo $css_next_button ?>">
                <a class="<?php echo $css_next_button ?>" onclick="validateStep('step<?php echo $unique_id ?>')"><?php echo $next_message ?></a>
                <button class="ea-hidden ea-button ea-submit" type="submit" value="Vai cachorro">
            </div>
        </div>
    </div>
    <div class="ea-step step<?php echo $unique_id ?> <?php echo $css_step ?>">
        <div class="ea-wait">Aguarde, estamos gravando a sua solicitação...</div>
        <div class="ea-success ea-hidden">Obrigado pelo orçamento!
        <a onclick="validateStep('step<?php echo $unique_id ?>')">Quero fazer outro orçamento!</a>
    </div>
</form>

<script src="js/inputmask.js"></script>
  <script src="js/listeners.js"></script>
  <script src="js/core.js"></script>
</body>
</html>