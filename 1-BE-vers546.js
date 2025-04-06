
var cuiio6IT = [37085161, 38149621, 38179993, 38974041, 40176861, 41200550, 41442313, 41448333, 41448634, 41512746, 40341171, 40197550, 40437770, 40809680, 20426592,
    40016608, 40988777, 41129415, 41141793, 41425251, 41430505, 41482347, 41517011, 41517028, 41530900, 41532424, 41002838, 41491240,
    41397386, 41467329, 6810303, 40524718, 40791201, 40980563, 41100877, 41163091, 41163599, 41251814, 41330703, 41357576,
    41425125, 41461138, 41511758, 41518849, 41519263, 41127534, 40319668, 40374934, 40604506, 40915867, 41246977, 41277593, 41441696,
    41542109, 41702139, 41127327, 41511867, 20292588, 38613337, 38742141, 40004491, 40054230, 40068864, 40591459,
    40860847, 40941066, 41092238, 41100021, 41158768, 41174516, 41304918, 41323424, 41387850, 41399586, 41420079, 41423362, 41443057, 41473147, 41515590,
    41517821, 41538958, 41541723, 40266141, 40356959, 41304717, 41488611, 135071, 4818832, 20384333, 41505605, 41394364, 41502311, 15809078,
    40039710, 40269982, 41299672, 41433923, 41361394, 41382982, 41337616, 40005929, 40428191, 40837156, 41433645, 41503285, 40966729,
    41555490, 41480696, 20418322, 41072454, 40813010, 40935982, 41243890, 41436100, 399159, 40748671, 41213682,
    40365026, 40573605, 40678462, 40707229, 40828298, 40910663, 40992939, 40995990, 41135679, 41663310, 41004122, 40973132, 41434555,
    40398722, 41133121, 41722060, 40959758, 41522012, 15785975, 20474088, 40801000, 41414392, 41479428, 41480319,
    41542670, 41504451, 38822093, 41435520, 41293468, 15871096, 41279787, 41506013, 41447824, 2736828, 2742837,
    41415693, 41560876, 41583717, 9780181, 41196541, 40850820, 41437080, 40038774, 40679409, 41455646, 40672413, 40874915,
    41414340, 41343048, 41289685, 41189179, 40695166, 41561182, 38964427, 38754316, 41557571, 41044400, 41404904, 41425444, 40836062, 41509299, 41508489];
var cuiio6ITPE = [6811053, 40565505, 37724187, 40282126, 1072390, 40301711, 40315239, 40336632, 40933753, 37660799, 40462226, 3399698, 3944434, 5696271, 38971628, 40805334, 41441845,
    40141561, 415824, 4818878, 40104442, 297916, 40101863, 40598467, 41069044, 38820740, 40083195, 41272472, 40737437, 40924458, 40622295, 2739672, 38961297, 38578301,
    41152710, 40564528, 40075887, 40136608, 38794557, 40721399, 38842581, 40469867, 411565, 3001129, 40915821, 15808570, 41139336, 40902238];
var cuiio23h = [2742837, 40182749, 135036, 41019810, 41277831, 41441845, 41552958, 135094, 41056521];
(function ($) {
    Drupal.behaviors.be1 = {
        attach: function (context, settings) {

            jQuery("table").on(
                "keypress",
                "input.float, input.numeric",
                function (event) {
                    if (isNumberPressed(this, event) === false) {
                        event.preventDefault();
                    }
                }
            );
            jQuery('#mywebform-edit-form').on('mywebform:sync', 'input.activateForm', function () {
                var values = Drupal.settings.mywebform.values;
                var cuiio = jQuery("#CUIIO").val();
                if (cuiio23h.includes(Number(cuiio))) {
                    jQuery('#ANEXA1_23H_HEADER').show();
                    jQuery('#ANEXA1_23H_CAP1').show();
                    jQuery('#ANEXA1_23H_CAP2').show();
                    jQuery('#ANEXA1_23H_CAP1_R5').show();
                    //jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();

                }
                else {
                    jQuery('#ANEXA1_23H_HEADER').hide();
                    jQuery('#ANEXA1_23H_CAP1').hide();
                    jQuery('#ANEXA1_23H_CAP2').hide();
                    jQuery('#ANEXA1_23H_CAP1_R5').hide();
                }
                for (var i = 0; i < values.CAP1_R_CI.length; i++) {
                    if (Number(values.CAP1_A[i]) == 7000) {
                        if (jQuery('#CAP1_R_C02-' + values.CAP1_R_CI[i]).val() > 0 && cuiio6ITPE.includes(Number(cuiio))) {
                            jQuery('#ANEXA2_6IT_HEADER').show();
                            jQuery('#ANEXA2_6IT_CAP1').show();
                            jQuery('#ANEXA2_6IT_CAP2').show();
                            jQuery('#ANEXA3_PE_HEADER').show();
                            jQuery('#ANEXA3_PE').show();
                        }
                        else if (jQuery('#CAP1_R_C02-' + values.CAP1_R_CI[i]).val() > 0 && cuiio6IT.includes(Number(cuiio)) || Number(cuiio) == 2742837) {
                            jQuery('#ANEXA2_6IT_HEADER').show();
                            jQuery('#ANEXA2_6IT_CAP1').show();
                            jQuery('#ANEXA2_6IT_CAP2').show();
                            jQuery('#ANEXA3_PE_HEADER').hide();
                            jQuery('#ANEXA3_PE').hide();
                            //jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();

                        }
                        else if (jQuery('#CAP1_R_C02-' + values.CAP1_R_CI[i]).val() > 0 && !cuiio6IT.includes(Number(cuiio))) {
                            jQuery('#ANEXA2_6IT_HEADER').hide();
                            jQuery('#ANEXA2_6IT_CAP1').hide();
                            jQuery('#ANEXA2_6IT_CAP2').hide();
                            jQuery('#ANEXA3_PE_HEADER').show();
                            jQuery('#ANEXA3_PE').show();
                        }
                        else if (jQuery('#CAP1_R_C02-' + values.CAP1_R_CI[i]).val() <= 0) {
                            jQuery('#ANEXA2_6IT_HEADER').hide();
                            jQuery('#ANEXA2_6IT_CAP1').hide();
                            jQuery('#ANEXA2_6IT_CAP2').hide();
                            jQuery('#ANEXA3_PE_HEADER').hide();
                            jQuery('#ANEXA3_PE').hide();
                        }
                    }
                    else {
                        jQuery('#ANEXA2_6IT_HEADER').hide();
                        jQuery('#ANEXA2_6IT_CAP1').hide();
                        jQuery('#ANEXA2_6IT_CAP2').hide();
                        jQuery('#ANEXA3_PE_HEADER').hide();
                        jQuery('#ANEXA3_PE').hide();
                    }


                }
            });
            $('.activateForm').on('change', function () {

            });

        }
    };

    webform.validators.be1 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;

        var servicii = 0;
        var tari = 0;
        var matchFoundExport = false;
        var matchFoundImport = false;

        // Definirea variabilelor
        const array_0110_6200 = [];
        const array_0110_0390 = [];
        const array_1110_2000 = [];
        const array_4100_4699 = [];
        const array_5111_6200 = [];
        const array_7000_8040 = [];
        const array_7013_7053 = [];
        const array_7014_7054 = [];
        const array_7015_7055 = [];
        const array_8013_8033 = [];
        const array_8014_8034 = [];
        const array_8015_8035 = [];
        const array_0110_6200_col6 = [];
        const array_0110_6200_col7 = [];
        const array_0110_6200_ECHIV = [];
        const array_0110_0390_col6 = [];
        const array_0110_0390_col7 = [];
        const array_0110_0390_ECHIV = [];
        const array_4100_4699_col6 = [];
        const array_4100_4699_col7 = [];
        const array_4100_4699_col10 = [];
        const array_4100_4699_ECHIV = [];
        const array_4200_4692 = [];
        const array_5111_6200_col6 = [];
        const array_5111_6200_col7 = [];
        const array_5111_6200_ECHIV = [];
        const array_1110_2000_col6 = [];
        const array_1110_2000_col7 = [];
        const array_1110_2000_ECHIV = [];
        const array_nr_rand_0110_6200 = [];
        const array_nr_rand_0110_0390 = [];
        const array_nr_rand_1110_2000 = [];
        const array_nr_rand_4100_4699 = [];
        const array_nr_rand_5111_6200 = [];

        const array_7000_7055_1 = [];
        const array_8000_8060_1 = [];

        var nr_cod_3000 = 0;
        var nr_rand_7000 = 0;
        var nr_rand_7050_11 = 0;
        var nr_rand_8000_11 = 0;
        var nr_rand_8010_11 = 0;
        var nr_rand_8030_11 = 0;
        var tab1c2_7000 = 0;
        var tab1c7_7000 = NaN;
        var tab1c6_3000 = 0;
        var tab1c7_3000 = 0;
        var tab1echiv_3000 = 0;
        var tab1c13_7000 = 0;
        var tab1c10_7000 = 0;
        var tab1c11_7000 = 0;
        var tab1c12_7000 = 0;
        var tab1c3_7000 = 0;
        var tab1c4_7000 = 0;
        var tab1c2_8000 = 0;
        var tab1c10_8000 = 0;
        var tab1c11_8000 = 0;
        var tab1c13_8000 = 0;
        var tab11c1_7000 = 0;
        var tab11c1_8000 = 0;

        let pushedErrors = new Set();

        var caem = values.CAEM;
        let valori_cap1 = {}; //stocare valori din Cap 1 in structuri pentru referinta
        let valori_cap1_col11 = {};
        let valori_cap1_col9 = {};

        for (var i = 0; i < values.CAP1_R_CI.length; i++) {
            // Asignarea valorilor din campuri
            // Capitolul I
            var tab1ci = Number(values.CAP1_R_CI[i]);
            var tab1a = Number(values.CAP1_A[i]);
            let input = values.CAP1_R_TEC[i];
            let tab1c_tec;

            if (typeof input === 'string' && input.includes('-')) {
                let [start, end] = input.split('-').map(Number);
                tab1c_tec = { start, end };
            } else {
                tab1c_tec = Number(input);
            }

            var tab1c_echiv = Number(values.CAP1_R_ECHIV[i]);

            // Validarea 1
            if (tab1c_echiv < tab1c_tec.start || tab1c_echiv > tab1c_tec.end) {
                webform.errors.push({
                    'fieldName': Number(values.CAP1_R_ECHIV[i]),
                    'weight': 1,
                    'index': i,
                    'msg': concatMessage("00-001",
                        Drupal.t("Echivalenţii calorici trebuie să respecte intervalul din clasificator (pe toate rînduri) Cap.1: [Rînd.@colA, Col.C] = @val nu respectă condiția (@start - @end)",
                            { '@colA': tab1a, '@val': tab1c_echiv, '@start': tab1c_tec.start, '@end': tab1c_tec.end })
                    ),
                });
            }

            var tab1c1 = Number(values.CAP1_R_C01[i]);
            var tab1c2 = Number(values.CAP1_R_C02[i]);
            var tab1c3 = Number(values.CAP1_R_C03[i]);
            var tab1c4 = Number(values.CAP1_R_C04[i]);
            var tab1c5 = Number(values.CAP1_R_C05[i]);
            var tab1c6 = Number(values.CAP1_R_C06[i]);
            var tab1c7 = Number(values.CAP1_R_C07[i]);
            var tab1c8 = Number(values.CAP1_R_C08[i]);
            var tab1c9 = Number(values.CAP1_R_C09[i]);
            var tab1c10 = Number(values.CAP1_R_C10[i]);
            var tab1c11 = Number(values.CAP1_R_C11[i]);
            var tab1c12 = Number(values.CAP1_R_C12[i]);
            var tab1c13 = Number(values.CAP1_R_C13[i]);
            var tab1c14 = Number(values.CAP1_R_C14[i]);

            if (tab1a === 4692) {
                let tab1c9Cell = document.getElementById('CAP1_R_C09-1');

                // If the cell contains an input element, disable it
                if (tab1c9Cell) {
                    let inputElement = tab1c9Cell.querySelector('input'); // Assuming the cell contains an input
                    if (inputElement) {
                        inputElement.disabled = true; // Disable the input
                        inputElement.style.backgroundColor = '#e0e0e0'; // Change background to indicate disabled
                    } else {
                        // If no input, apply styles directly to the cell
                        tab1c9Cell.style.pointerEvents = 'none';
                        tab1c9Cell.style.backgroundColor = '#e0e0e0';
                    }
                }
            }

            let cap3_value = Number(values.CAP3_R03_C6);

            /*// Validarea 74
            if (cap3_value > 0) {
              if (tab1a >= 110 && tab1a <= 6200 && tab1c9 <= 0) {
                webform.errors.push({
                  'fieldName': Number(values.CAP1_R_C09[i]),
                  'weight': 74,
                  'index': i,
                  'msg': concatMessage("IC-002",
                    Drupal.t("Dacă Cap.3: [Rînd.03, Col.6] > 0, atunci Cap.1: [Rînd.0110...6200, Col.9] > 0")
                  ),
                });
              }
            }*/

            var cap2Index = values.CAP2_A.findIndex(a => Number(a) === tab1a);

            var tab2c1_aux = Number(values.CAP2_R_C01[cap2Index] || 0);

            // Validarea 77
            if (tab1c9 > 0 && tab2c1_aux <= 0) {
                webform.errors.push({
                    'fieldName': Number(values.CAP1_R_C09[i]),
                    'weight': 77,
                    'index': i,
                    'msg': concatMessage("IC-004",
                        Drupal.t("Dacă Cap.I: [Rînd.@row, Col.9] > 0, atunci Cap.II: [Rînd.@row, Col.1] > 0", { '@row': tab1a })
                    ),
                });
            }

            //salvam valorile relevante intr-un obiect
            if (!valori_cap1[tab1a]) {
                valori_cap1[tab1a] = { col10: 0 }; //initializam structura
            }
            if (!valori_cap1_col11[tab1a]) {
                valori_cap1_col11[tab1a] = { col11: 0 };
            }
            if (!valori_cap1_col9[tab1a]) {
                valori_cap1_col9[tab1a] = 0;
            }

            valori_cap1[tab1a].col10 += tab1c10; //adaugam valoarea col 10 la un cod distinct
            valori_cap1_col11[tab1a].col11 += tab1c11;
            valori_cap1_col9[tab1a] += tab1c9;


            var tab1sum_1_2_3_4 = tab1c1 + tab1c2 + tab1c3 + tab1c4;
            var tab1sum_6_7_8_9_10_11_12_13_14 = tab1c6 + tab1c7 + tab1c8 + tab1c9 + tab1c10 + tab1c11 + tab1c12 + tab1c13 + tab1c14;

            // captarea variabilelor specifice tipului de combustibil/energie
            // Capitolul I
            if (tab1a == 3000) {
                tab1c6_3000 = tab1c6;
                tab1c7_3000 = tab1c7;
                nr_cod_3000 = tab1a;
                tab1echiv_3000 = tab1c_echiv;
            }
            if (tab1a == 4200) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 4630) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 46521) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 46522) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 4671) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 4692) {
                array_4200_4692.push(tab1a);
            }
            if (tab1a == 7000) {
                nr_rand_7000 = tab1ci;
                tab1c1_7000 = tab1c1;
                tab1c2_7000 = tab1c2;
                tab1c7_7000 = tab1c7;
                tab1c13_7000 = tab1c13;
                tab1c10_7000 = tab1c10;
                tab1c11_7000 = tab1c11;
                tab1c12_7000 = tab1c12;
                tab1c3_7000 = tab1c3;
                tab1c4_7000 = tab1c4;

                array_7000_8040.push(tab1a);
                array_7000_7055_1.push(tab1a);
            }
            if (tab1a == 7001) {
                tab1c1_7001 = tab1c1;
            }
            if (tab1a == 7011) {
                tab1c2_7011 = tab1c2;
            }
            if (tab1a == 7012) {
                tab1c2_7012 = tab1c2;
            }
            if (tab1a == 7013) {
                tab1c2_7013 = tab1c2;

                array_7013_7053.push(tab1a);
            }
            if (tab1a == 7014) {
                tab1c2_7014 = tab1c2;

                array_7014_7054.push(tab1a)
            }
            if (tab1a == 7015) {
                tab1c2_7015 = tab1c2;

                array_7015_7055.push(tab1a);
            }
            if (tab1a == 7051) {
                tab1c2_7051 = tab1c2;
            }
            if (tab1a == 7052) {
                tab1c2_7052 = tab1c2;
            }
            if (tab1a == 7053) {
                tab1c2_7053 = tab1c2;

                array_7013_7053.push(tab1a);
            }
            if (tab1a == 7054) {
                tab1c2_7054 = tab1c2;

                array_7014_7054.push(tab1a);
            }
            if (tab1a == 7055) {
                tab1c2_7055 = tab1c2;

                array_7015_7055.push(tab1a);
            }
            if (tab1a == 8000) {
                tab1c2_8000 = tab1c2;
                tab1c10_8000 = tab1c10;
                tab1c11_8000 = tab1c11;
                tab1c13_8000 = tab1c13;
            }
            if (tab1a == 8010) {
                tab1c2_8010 = tab1c2;
            }
            if (tab1a == 8011) {
                tab1c1_8011 = tab1c1;
                tab1c2_8011 = tab1c2;
            }
            if (tab1a == 8012) {
                tab1c1_8012 = tab1c1;
                tab1c2_8012 = tab1c2;
            }
            if (tab1a == 8013) {
                tab1c1_8013 = tab1c1;
                tab1c2_8013 = tab1c2;

                array_8013_8033.push(tab1a);
            }
            if (tab1a == 8014) {
                tab1c1_8014 = tab1c1;
                tab1c2_8014 = tab1c2;

                array_8014_8034.push(tab1a);
            }
            if (tab1a == 8015) {
                tab1c1_8015 = tab1c1;
                tab1c2_8015 = tab1c2;

                array_8015_8035.push(tab1a);
            }
            if (tab1a == 8030) {
                tab1c1_8030 = tab1c1;
                tab1c2_8030 = tab1c2;
            }
            if (tab1a == 8031) {
                tab1c1_8031 = tab1c1;
                tab1c2_8031 = tab1c2;
            }
            if (tab1a == 8032) {
                tab1c1_8032 = tab1c1;
            }
            if (tab1a == 8033) {
                tab1c1_8033 = tab1c1;
                tab1c2_8033 = tab1c2;

                array_8013_8033.push(tab1a);
            }
            if (tab1a == 8034) {
                tab1c1_8034 = tab1c1;
                tab1c2_8034 = tab1c2;

                array_8014_8034.push(tab1a);
            }
            if (tab1a == 8035) {
                tab1c2_8035 = tab1c2;

                array_8015_8035.push(tab1a);
            }
            if (tab1a == 8040) {
                tab1c1_8040 = tab1c1;
                tab1c2_8040 = tab1c2;
            }
            if (tab1a == 8050) {
                tab1c1_8050 = tab1c1;
            }
            if (tab1a == 8052) {
                tab1c2_8052 = tab1c2;
            }
            if (tab1a == 8060) {
                tab1c1_8060 = tab1c1;
            }
            if (tab1a >= 110 && tab1a <= 6200) {
                array_nr_rand_0110_6200.push(tab1ci);
                array_0110_6200.push(tab1a);
                array_0110_6200_col6.push(tab1c6);
                array_0110_6200_col7.push(tab1c7);
                array_0110_6200_ECHIV.push(tab1c_echiv);
            }
            if (tab1a >= 110 && tab1a <= 390) {
                array_nr_rand_0110_0390.push(tab1ci);
                array_0110_0390.push(tab1a);
                array_0110_0390_col6.push(tab1c6);
                array_0110_0390_col7.push(tab1c7);
                array_0110_0390_ECHIV.push(tab1c_echiv);
            }
            if (tab1a >= 4100 && tab1a <= 4699) {
                array_nr_rand_4100_4699.push(tab1ci);
                array_4100_4699.push(tab1a);
                array_4100_4699_col6.push(tab1c6);
                array_4100_4699_col7.push(tab1c7);
                array_4100_4699_col10.push(tab1c10);
                array_4100_4699_ECHIV.push(tab1c_echiv);
            }
            if (tab1a >= 5111 && tab1a <= 6200) {
                array_nr_rand_5111_6200.push(tab1ci);
                array_5111_6200.push(tab1a);
                array_5111_6200_col6.push(tab1c6);
                array_5111_6200_col7.push(tab1c7);
                array_5111_6200_ECHIV.push(tab1c_echiv);
            }
            if (tab1a >= 1110 && tab1a <= 2000) {
                array_nr_rand_1110_2000.push(tab1ci);
                array_1110_2000.push(tab1a);
                array_1110_2000_col6.push(tab1c6);
                array_1110_2000_col7.push(tab1c7);
                array_1110_2000_ECHIV.push(tab1c_echiv);
            }

            // validarile ciclice
            // Validarea 5
            /*if (tab1c5 != tab1sum_1_2_3_4) {
              webform.errors.push({
                'fieldName': 'CAP1_R_C05',
                'weight': 1,
                'index': i,
                'msg': concatMessage("01-005",
                  Drupal.t("Cap.1: [Col.5] = [Col.1+2+3+4] (pe toate rinduri). [Rînd.@rand]: @col5 != @sum", {'@rand': tab1a, '@col5': tab1c5, '@sum': tab1sum_1_2_3_4})
                ),
              });
            }*/

            // Validarea 6
            if (tab1c5 != tab1sum_6_7_8_9_10_11_12_13_14) {
                webform.errors.push({
                    'fieldName': Number(values.CAP1_R_C05[i]),
                    'weight': 2,
                    'index': i,
                    'msg': concatMessage("01-006",
                        Drupal.t("Cap.1: [Col1+2+3+4] = [Col.5] = [Col.6+7+8+9+10+11+12+13+14] (pe toate rinduri). [Rînd.@rand]: @cum4 != @col5 != @sum", { '@rand': tab1a, '@sum4': tab1sum_1_2_3_4, '@col5': tab1c5, '@sum': tab1sum_6_7_8_9_10_11_12_13_14 })
                    ),
                });
            }

            /*// Validarea 17
            if (tab1a >= 110 && tab1a < 6200 && tab1c2 > 0) {
              webform.warnings.push({
                'fieldName': Number(values.CAP1_R_C02[i]),
                'weight': 17,
                'index': i,
                'msg': concatMessage("01-017",
                  Drupal.t("Cap. I: [[0@CAP1_A], Col.2] > 0", { '@CAP1_A': tab1a })
                ),
              });
            } else if (tab1a >= 1000 && tab1a <= 6200 && tab1c2 < 0) {
              webform.warnings.push({
                'fieldName': Number(values.CAP1_R_C02[i]),
                'weight': 17,
                'index': i,
                'msg': concatMessage(
                  Drupal.t("Cap. I: [[0@CAP1_A], Col.2] > 0", { '@CAP1_A': tab1a })
                ),
              });
            }*/

            if (array_4100_4699.includes(4200)) {
                jIndex4200 = tab1ci - 1;

                valc10_4200 = tab1c10;
            }
            if (array_4100_4699.includes(4630)) {
                jIndex4630 = tab1ci - 1;

                valc10_4630 = tab1c10;
            }
            if (array_4100_4699.includes(4652)) {
                jIndex4652 = tab1ci - 1;

                valc10_4652 = tab1c10;
            }
            if (array_4100_4699.includes(4671)) {
                jIndex4671 = tab1ci - 1;

                valc10_4671 = tab1c10;
            }
            if (array_4100_4699.includes(4692)) {
                jIndex4692 = tab1ci - 1;

                valc10_4692 = tab1c10;
            }

            /*// Validarea 16
            if ((tab1c13_8000 > 0 && caem != 'D3511' && caem != 'D3530') || (tab1c13_8000 == 0 && (caem == 'D3511' || caem == 'D3530'))) {
              webform.warnings.push({
                'fieldName': Number(values.CAP1_R_C13[i]),
                'weight': 16,
                'index': i - 1,
                'msg': concatMessage("01-016",
                  Drupal.t("Cap.1: [Rînd.8000, Col.13] > 0, valabil pentru rețele termice (CAEM-2: D3511 sau D3530)")
                ),
              });
            }*/
        }

        var tab11c1_7001 = 0;
        var nr_rand_7010_11 = 0;
        var tab11c1_7010 = 0;
        var tab11c1_7011 = 0;
        var tab11c1_7012 = 0;
        var tab11c1_7013 = 0;
        var tab11c1_7014 = 0;
        var tab11c1_7015 = 0;
        var tab11c1_7020 = 0;
        var tab11c1_7030 = 0;
        var tab11c1_7040 = 0;
        var tab11c1_7050 = 0;
        var tab11c1_7051 = 0;
        var tab11c1_7052 = 0;
        var tab11c1_7053 = 0;
        var tab11c1_7054 = 0;
        var tab11c1_7055 = 0;
        var tab11c1_8001 = 0;
        var tab11c1_8010 = 0;
        var tab11c1_8011 = 0;
        var tab11c1_8012 = 0;
        var tab11c1_8013 = 0;
        var tab11c1_8014 = 0;
        var tab11c1_8015 = 0;
        var tab11c1_8030 = 0;
        var tab11c1_8031 = 0;
        var tab11c1_8032 = 0;
        var tab11c1_8033 = 0;
        var tab11c1_8034 = 0;
        var tab11c1_8035 = 0;
        var tab11c1_8040 = 0;
        var tab11c1_8050 = 0;
        var tab11c1_8060 = 0;

        const array_7000_7055_11 = [];
        const array_8000_8060_11 = [];
        let cap3_sum_r01_03_c6 = 0;

        for (var j = 0; j < values.CAP11_R_CI.length; j++) {

            // Capitolul I.I
            var tab11ci = Number(values.CAP11_R_CI[j]);
            var tab11a = Number(values.CAP11_A[j]);
            var tab11c1 = Number(values.CAP11_R_C01[j]);

            if (tab11a == 7000) {
                tab11c1_7000 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7001) {
                tab11c1_7001 = tab11c1;
            }
            if (tab11a == 7010) {
                nr_rand_7010_11 = tab11ci;
                tab11c1_7010 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7011) {
                tab11c1_7011 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7012) {
                tab11c1_7012 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7013) {
                tab11c1_7013 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7014) {
                tab11c1_7014 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7015) {
                tab11c1_7015 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7020) {
                tab11c1_7020 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7030) {
                tab11c1_7030 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7040) {
                tab11c1_7040 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7050) {
                nr_rand_7050_11 = tab11ci;
                tab11c1_7050 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7051) {
                tab11c1_7051 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7052) {
                tab11c1_7052 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7053) {
                tab11c1_7053 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7054) {
                tab11c1_7054 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 7055) {
                tab11c1_7055 = tab11c1;

                array_7000_7055_11.push(tab11a);
            }
            if (tab11a == 8000) {
                nr_rand_8000_11 = tab11ci;
                tab11c1_8000 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8001) {
                tab11c1_8001 = tab11c1;
            }
            if (tab11a == 8010) {
                tab11c1_8010 = tab11c1;
                nr_rand_8010_11 = tab11ci;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8011) {
                tab11c1_8011 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8012) {
                tab11c1_8012 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8013) {
                tab11c1_8013 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8014) {
                tab11c1_8014 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8015) {
                tab11c1_8015 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a === 8030) {
                tab11c1_8030 = tab11c1;
                nr_rand_8030_11 = tab11ci;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8031) {
                tab11c1_8031 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8032) {
                tab11c1_8032 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8033) {
                tab11c1_8033 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8034) {
                tab11c1_8034 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8035) {
                tab11c1_8035 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8040) {
                tab11c1_8040 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8050) {
                tab11c1_8050 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }
            if (tab11a == 8060) {
                tab11c1_8060 = tab11c1;

                array_8000_8060_11.push(tab11a);
            }

            // Validarea 13
            /*if (tab11c1_7000 < tab11c1_7001 && Number(values.CAP11_A[j]) == 7001) {
              webform.errors.push({
                'fieldName': 'CAP11_R_C01',
                'weight': 13,
                'index': j,
                'msg': concatMessage("01-1-013",
                  Drupal.t("Cap.1.1: [Rind.7000, Col.1] >= [Rind.7001, Col.1]: @r7000 <= @r7001", {'@r7000': tab11c1_7000, '@r7001': tab11c1_7001})
                ),
              });
            }*/

            /*if (array_8000_8060_11.includes(8010) && array_8000_8060_11.includes(8030)) {
              for (var t2 = 0; t2 < array_0110_6200.length; t2++) {
                let errorKey = `${array_0110_6200[t2]}-${t2}`;
                let i = array_nr_rand_0110_6200[t2] - 1;
      
                // Validarea 42
                let val13 = array_0110_6200_col7[t2] * array_0110_6200_ECHIV[t2] / (tab11c1_8010 + tab11c1_8030);
      
                if (val13 < 0.15 || val13 > 0.3) {
                  if (array_0110_6200[t2] >= 110 && array_0110_6200[t2] < 1000 && !pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 42,
                      'index': i,
                      'msg': concatMessage("01-042",
                        Drupal.t("Cap.1: 0.15 <= [Rind.[0@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8010+8030, Col.1) <= 0.3. 0.15 >= @val >= 0.3", { '@CAP1_A': array_0110_6200[t2] })
                      ),
                    });
                  } else if (array_0110_6200[t2] >= 1000 && array_0110_6200[t2] <= 6200 && !pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 42,
                      'index': i,
                      'msg': concatMessage("01-042",
                        Drupal.t("Cap.1: 0.15 <= [Rind.[@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8010+8030, Col.1) <= 0.3. 0.15 >= @val >= 0.3", { '@CAP1_A': array_0110_6200[t2] })
                      ),
                    });
                  }
                }
              }
            }*/

            /*if (array_7000_7055_11.includes(7011) && array_7000_7055_11.includes(7051)) {
              for (var t3 = 0; t3 < array_0110_0390.length; t3++) {
      
                // Validarea 30
                let val3 = array_0110_0390_col6[t3] * array_0110_0390_ECHIV[t3] / (tab11c1_7011 + tab11c1_7051);
      
                if (val3 < 0.15 || val3 > 0.6) {
                  let i = array_nr_rand_0110_0390[t3] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C06',
                    'weight': 30,
                    'index': i,
                    'msg': concatMessage("01-030",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [0@CAP1_A], Col.6 * Col.C] / [Cap.1.1, Rind.7011+7051, Col.1] <= 0.6", { '@CAP1_A': array_0110_0390[t3] })
                    ),
                  });
                }
      
                // Validarea 20
                if ((array_0110_0390_col6[t3] > 0 && (tab11c1_7011 + tab11c1_7051 <= 0)) || (array_0110_0390_col6[t3] <= 0 && (tab11c1_7011 + tab11c1_7051 > 0))) {
                  let errorKey = `${array_0110_0390[t3]}-${t3}`;
                  let i = array_nr_rand_0110_0390[t3] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C06',
                      'weight': 20,
                      'index': i,
                      'msg': concatMessage("01-020",
                        Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [0@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7011 + 7051 (si invers).", { '@CAP1_A': array_0110_0390[t3] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_8000_8060_11.includes(8011) && array_8000_8060_11.includes(8031)) {
              for (var t4 = 0; t4 < array_0110_0390.length; t4++) {
      
                // Validarea 31
                let val4 = array_0110_0390_col6[t4] * array_0110_0390_ECHIV[t4] / (tab11c1_8011 + tab11c1_8031);
      
                if (val4 < 0.15 || val4 > 0.3) {
                  let i = array_nr_rand_0110_0390[t4] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C06',
                    'weight': 31,
                    'index': i,
                    'msg': concatMessage("01-031",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [0@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8011+8031, Col.1] <= 0.3", { '@CAP1_A': array_0110_0390[t4] })
                    ),
                  });
                }
      
                // Validarea 21
                if ((array_0110_0390_col7[t4] > 0 && (tab11c1_8011 + tab11c1_8031 <= 0)) || (array_0110_0390_col7[t4] <= 0 && (tab11c1_8011 + tab11c1_8031 > 0))) {
                  let errorKey = `${array_0110_0390[t4]}-${t4}`;
                  let i = array_nr_rand_0110_0390[t4] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 21,
                      'index': i,
                      'msg': concatMessage("01-021",
                        Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [0@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 8011 + 8031 (si invers).", { '@CAP1_A': array_0110_0390[t4] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_7000_7055_11.includes(7012) && array_7000_7055_11.includes(7052)) {
              for (var t5 = 0; t5 < array_4100_4699.length; t5++) {
      
                // Validarea 32
                let val5 = array_4100_4699_col6[t5] * array_4100_4699_ECHIV[t5] / (tab11c1_7012 + tab11c1_7052);
      
                if (val5 < 0.15 || val5 > 0.6) {
                  let i = array_nr_rand_4100_4699[t5] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C06',
                    'weight': 32,
                    'index': i,
                    'msg': concatMessage("01-032",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.6 * Col.C] / [Cap.1.1, Rind.7012+7052, Col.1] <= 0.6", { '@CAP1_A': array_4100_4699[t5] })
                    ),
                  });
                }
      
                // Validarea 22
                if ((array_4100_4699_col6[t5] > 0 && (tab11c1_7012 + tab11c1_7052 <= 0)) || (array_4100_4699_col6[t5] <= 0 && (tab11c1_7012 + tab11c1_7052 > 0))) {
                  let errorKey = `${array_4100_4699[t5]}-${t5}`;
                  let i = array_nr_rand_4100_4699[t5] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C06',
                      'weight': 22,
                      'index': i,
                      'msg': concatMessage("01-022",
                        Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7012 + 7052 (si invers).", { '@CAP1_A': array_4100_4699[t5] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_8000_8060_11.includes(8012) && array_8000_8060_11.includes(8032)) {
              for (var t6 = 0; t6 < array_4100_4699.length; t6++) {
      
                // Validarea 33
                let val6 = array_4100_4699_col7[t6] * array_4100_4699_ECHIV[t6] / (tab11c1_8012 + tab11c1_8032);
      
                if (val6 < 0.15 || val6 > 0.3) {
                  let i = array_nr_rand_4100_4699[t6] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C07',
                    'weight': 33,
                    'index': i,
                    'msg': concatMessage("01-033",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8012+8032, Col.1] <= 0.3", { '@CAP1_A': array_4100_4699[t6] })
                    ),
                  });
                }
      
                // Validarea 23
                if ((array_4100_4699_col7[t6] > 0 && (tab11c1_8012 + tab11c1_8032 <= 0)) || (array_4100_4699_col7[t6] <= 0 && (tab11c1_8012 + tab11c1_8032 > 0))) {
                  let errorKey = `${array_4100_4699[t6]}-${t6}`;
                  let i = array_nr_rand_4100_4699[t6] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 23,
                      'index': i,
                      'msg': concatMessage("01-023",
                        Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 8012 + 8032 (si invers).", { '@CAP1_A': array_4100_4699[t6] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if ((array_7000_7055_11.includes(7013) && array_7000_7055_11.includes(7053)) && nr_cod_3000 == 3000) {
      
              // Validarea 34
              let val1 = tab1c6_3000 * tab1echiv_3000 / (tab11c1_7013 + tab11c1_7053);
      
              if (val1 < 0.15 || val1 > 0.6) {
      
                webform.errors.push({
                  'fieldName': 'CAP1_R_C06',
                  'weight': 34,
                  'index': i,
                  'msg': concatMessage("01-034",
                    Drupal.t("Cap.1: 0.15 <= [Rind.3000, Col.6 * Col.C] / [Cap.1.1, Rind.7013+7053, Col.1] <= 0.6")
                  ),
                });
              }
      
              // Validarea 24
              if ((tab1c6_3000 > 0 && (tab11c1_7013 + tab11c1_7053 <= 0)) || (tab1c6_3000 <= 0 && (tab11c1_7013 + tab11c1_7053 > 0))) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C06',
                  'weight': 24,
                  'index': i,
                  'msg': concatMessage("01-024",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7013 + 7053 (si invers).", { '@CAP1_A': nr_cod_3000 })
                  ),
                });
              }
            }*/

            /*if ((array_8000_8060_11.includes(8013) && array_8000_8060_11.includes(8033)) && nr_cod_3000 == 3000) {
            
              // Validarea 35
              let val2 = tab1c7_3000 * tab1echiv_3000 / (tab11c1_8013 + tab11c1_8033);
      
              if (val2 < 0.15 || val2 > 0.3) {
      
                webform.errors.push({
                  'fieldName': 'CAP1_R_C07',
                  'weight': 35,
                  'index': i,
                  'msg': concatMessage("01-035",
                    Drupal.t("Cap.1: 0.15 <= [Rind.3000, Col.7 * Col.C] / [Cap.1.1, Rind.8013+8033, Col.1] <= 0.3")
                  ),
                });
              }
      
              // Validarea 25
              if ((tab1c7_3000 > 0 && (tab11c1_8013 + tab11c1_8033 <= 0)) || (tab1c7_3000 <= 0 && (tab11c1_8013 + tab11c1_8033 > 0))) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C07',
                  'weight': 25,
                  'index': i,
                  'msg': concatMessage("01-025",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [@CAP1_A], atunci Cap I.I col. 1 > 0 rînd 8013 + 8033 (si invers).", { '@CAP1_A': nr_cod_3000 })
                  ),
                });
              }
            }*/

            /*if (array_7000_7055_11.includes(7015) && array_7000_7055_11.includes(7055)) {
              for (var t7 = 0; t7 < array_5111_6200.length; t7++) {
      
                // Validarea 36
                let val7 = array_5111_6200_col6[t7] * array_5111_6200_ECHIV[t7] / (tab11c1_7015 + tab11c1_7055);
      
                if (val7 < 0.15 || val7 > 0.6) {
                  let i = array_nr_rand_5111_6200[t7] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C06',
                    'weight': 36,
                    'index': i,
                    'msg': concatMessage("01-036",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.6 * Col.C] / [Cap.1.1, Rind.7015+7055, Col.1] <= 0.6", { '@CAP1_A': array_5111_6200[t7] })
                    ),
                  });
                }
      
                // Validarea 26
                if ((array_5111_6200_col6[t7] > 0 && (tab11c1_7015 + tab11c1_7055 <= 0)) || (array_5111_6200_col6[t7] <= 0 && (tab11c1_7015 + tab11c1_7055 > 0))) {
                  let errorKey = `${array_5111_6200[t7]}-${t7}`;
                  let i = array_nr_rand_5111_6200[t7] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C06',
                      'weight': 26,
                      'index': i,
                      'msg': concatMessage("01-026",
                        Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7015 + 7055 (si invers).", { '@CAP1_A': array_5111_6200[t7] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_8000_8060_11.includes(8015) && array_8000_8060_11.includes(8035)) {
              for (var t8 = 0; t8 < array_5111_6200.length; t8++) {
      
                // Validarea 37
                let val8 = array_5111_6200_col7[t8] * array_5111_6200_ECHIV[t8] / (tab11c1_8015 + tab11c1_8035);
      
                if (val8 < 0.15 || val8 > 0.3) {
                  let i = array_nr_rand_5111_6200[t8] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C07',
                    'weight': 37,
                    'index': i,
                    'msg': concatMessage("01-037",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8015+8035, Col.1] <= 0.3", { '@CAP1_A': array_5111_6200[t8] })
                    ),
                  });
                }
      
                // Validarea 27
                if ((array_5111_6200_col7[t8] > 0 && (tab11c1_8015 + tab11c1_8035 <= 0)) || (array_5111_6200_col7[t8] <= 0 && (tab11c1_8015 + tab11c1_8035 > 0))) {
                  let errorKey = `${array_5111_6200[t8]}-${t8}`;
                  let i = array_nr_rand_5111_6200[t8] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 27,
                      'index': i,
                      'msg': concatMessage("01-027",
                        Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 8015 + 8035 (si invers).", { '@CAP1_A': array_5111_6200[t8] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_7000_7055_11.includes(7014) && array_7000_7055_11.includes(7054)) {
              for (var t9 = 0; t9 < array_1110_2000.length; t9++) {
      
                // Validarea 38
                let val9 = array_1110_2000_col6[t9] * array_1110_2000_ECHIV[t9] / (tab11c1_7014 + tab11c1_7054);
      
                if (val9 < 0.15 || val9 > 0.6) {
                  let i = array_nr_rand_1110_2000[t9] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C06',
                    'weight': 38,
                    'index': i,
                    'msg': concatMessage("01-038",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.6 * Col.D] / [Cap.1.1, Rind.7014+7054, Col.1] <= 0.6", { '@CAP1_A': array_1110_2000[t9] })
                    ),
                  });
                }
      
                // Validarea 28
                if ((array_1110_2000_col6[t9] > 0 && (tab11c1_7014 + tab11c1_7054 <= 0)) || (array_1110_2000_col6[t9] <= 0 && (tab11c1_7014 + tab11c1_7054 > 0))) {
                  let errorKey = `${array_1110_2000[t9]}-${t9}`;
                  let i = array_nr_rand_1110_2000[t9] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C06',
                      'weight': 28,
                      'index': i,
                      'msg': concatMessage("01-028",
                        Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [@CAP1_A], atunci col. 1 > 0 Cap. I.I rînd 7014 + 7054 (si invers).", { '@CAP1_A': array_1110_2000[t9] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*if (array_8000_8060_11.includes(8014) && array_8000_8060_11.includes(8034)) {
              for (var t10 = 0; t10 < array_1110_2000.length; t10++) {
      
                // Validarea 39
                let val10 = array_1110_2000_col7[t10] * array_1110_2000_ECHIV[t10] / (tab11c1_8014 + tab11c1_8034);
      
                if (val10 < 0.15 || val10 > 0.3) {
                  let i = array_nr_rand_1110_2000[t10] - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C07',
                    'weight': 39,
                    'index': i,
                    'msg': concatMessage("01-039",
                      Drupal.t("Cap.1: 0.15 <= [Rind. [@CAP1_A], Col.7 * Col.C] / [Cap.1.1, Rind.8014+8034, Col.1] <= 0.3", { '@CAP1_A': array_1110_2000[t10] })
                    ),
                  });
                }
      
                // Validarea 29
                if ((array_1110_2000_col7[t10] > 0 && (tab11c1_8014 + tab11c1_8034 <= 0)) || (array_1110_2000_col7[t10] <= 0 && (tab11c1_8014 + tab11c1_8034 > 0))) {
                  let errorKey = `${array_1110_2000[t10]}-${t10}`;
                  let i = array_nr_rand_1110_2000[t10] - 1;
      
                  if (!pushedErrors.has(errorKey)) {
                    webform.errors.push({
                      'fieldName': 'CAP1_R_C07',
                      'weight': 29,
                      'index': i,
                      'msg': concatMessage("01-029",
                        Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [@CAP1_A], atunci col. 1 > 0 Cap. I.I rînd 8014 + 8034 (si invers).", { '@CAP1_A': array_1110_2000[t10] })
                      ),
                    });
      
                    pushedErrors.add(errorKey);
                  }
                }
              }
            }*/

            /*// Validarea 40
            if (array_7000_8040.includes(7000) && array_8000_8060_11.includes(8040)) {
              if (tab11c1_8040 !== 0) {
                let val11 = tab1c7_7000 / tab11c1_8040;
      
                if (val11 < 1.16 || val11 > 1.66) {
                  let i = nr_rand_7000 - 1;
      
                  webform.errors.push({
                    'fieldName': 'CAP1_R_C07',
                    'weight': 40,
                    'index': i,
                    'msg': concatMessage("01-040",
                      Drupal.t("Cap.1: 1.16 <= [Rind.7000, Col.7] / [Cap.1.1, Rind.8040, Col.1] <= 1.66")
                    ),
                  });
                }
              } else {
                let i = nr_rand_7000 - 1;
              
                webform.errors.push({
                  'fieldName': 'CAP1_R_C07',
                  'weight': 40,
                  'index': i,
                  'msg': Drupal.t("Eroare. Împărțirea la zero!")
                });
              }
            }*/
        }

        for (var t1 = 0; t1 < array_0110_6200.length; t1++) {
            let errorKey = `${array_0110_6200[t1]}-${t1}`;
            let i = array_nr_rand_0110_6200[t1] - 1;

            // Validarea 41
            let val12 = array_0110_6200_col6[t1] * array_0110_6200_ECHIV[t1] / (tab11c1_7010 + tab11c1_7050);

            /*if (val12 < 0.15 || val12 > 0.6) {
              if (array_0110_6200[t1] >= 110 && array_0110_6200[t1] < 1000 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C06',
                  'weight': 40,
                  'index': i,
                  'msg': concatMessage("01-041",
                    Drupal.t("Cap.1: 0.15 <= [Rind.[0@CAP1_A], Col.6 * Col.C] / [Cap.1.1, Rind.7010+7050, Col.1) <= 0.6", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
              } else if (array_0110_6200[t1] >= 1000 && array_0110_6200[t1] <= 6200 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C06',
                  'weight': 40,
                  'index': i,
                  'msg': concatMessage("01-041",
                    Drupal.t("Cap.1: 0.15 <= [Rind.[@CAP1_A], Col.6 * Col.C] / [Cap.1.1, Rind.7010+7050, Col.1) <= 0.6. ", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
              }
            }*/

            /*// Validarea 18
            if ((array_0110_6200_col6[t1] > 0 && (tab11c1_7010 + tab11c1_7050 <= 0)) || 
                (array_0110_6200_col6[t1] <= 0 && (tab11c1_7010 + tab11c1_7050 > 0))) {
              if (array_0110_6200[t1] >= 110 && array_0110_6200[t1] < 1000 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': Number(values.CAP1_R_C06[i]),
                  'weight': 18,
                  'index': i,
                  'msg': concatMessage("01-018",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [0@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7010, 7050 (și invers).", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
      
                pushedErrors.add(errorKey);
              } else if (array_0110_6200[t1] >= 1000 && array_0110_6200[t1] <= 6200 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': Number(values.CAP1_R_C06[i]),
                  'weight': 18,
                  'index': i,
                  'msg': concatMessage("01-018",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 7010, 7050 (și invers).", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
      
                pushedErrors.add(errorKey);
              }
            }*/

            /*// Validarea 19
            if ((array_0110_6200_col7[t1] > 0 && (tab11c1_8010 + tab11c1_8030 <= 0)) || 
                (array_0110_6200_col7[t1] <= 0 && (tab11c1_8010 + tab11c1_8030 > 0))) {
              if (array_0110_6200[t1] >= 110 && array_0110_6200[t1] < 1000 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C07',
                  'weight': 19,
                  'index': i,
                  'msg': concatMessage("01-019",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [0@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 8010, 8030 (si invers)", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
      
                pushedErrors.add(errorKey);
              } else if (array_0110_6200[t1] >= 1000 && array_0110_6200[t1] <= 6200 && !pushedErrors.has(errorKey)) {
                webform.errors.push({
                  'fieldName': 'CAP1_R_C07',
                  'weight': 19,
                  'index': i,
                  'msg': concatMessage("01-019",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [@CAP1_A], atunci Cap. I.I col. 1 > 0 rînd 8010, 8030 (si invers).", { '@CAP1_A': array_0110_6200[t1] })
                  ),
                });
      
                pushedErrors.add(errorKey);
              }
            }*/
        }

        ["R01", "R02", "R03"].forEach(rind => {
            cap3_sum_r01_03_c6 += Number(values[`CAP3_${rind}_C06`] || 0);
        });

        // Validarea 73
        if (tab11c1_8030 !== (Number(values.CAP3_R01_C06) - Number(values.CAP3_R03_C06))) {
            webform.errors.push({
                'fieldName': Number(values.CAP11_R_C01[i]),
                'weight': 73,
                'msg': concatMessage("IC-001",
                    Drupal.t("Cap.1.1: [Rind.8030, Col.1] = Cap.3: [Rind.01-03, Col.6]. @8030 != @sum", { '@8030': tab11c1_8030, '@sum': (Number(values.CAP3_R01_C06) - Number(values.CAP3_R03_C06)) })
                ),
            });
        }

        // sumele
        var sum1 = tab11c1_7010 + tab11c1_7020 + tab11c1_7030 + tab11c1_7040 + tab11c1_7050;
        var sum2 = tab11c1_7011 + tab11c1_7012 + tab11c1_7013 + tab11c1_7014 + tab11c1_7015;
        var sum3 = tab11c1_7051 + tab11c1_7052 + tab11c1_7053 + tab11c1_7054 + tab11c1_7055;
        var sum4 = tab11c1_8010 + tab11c1_8030 + tab11c1_8040 + tab11c1_8050 + tab11c1_8060;
        var sum5 = tab11c1_8011 + tab11c1_8012 + tab11c1_8013 + tab11c1_8014 + tab11c1_8015;
        var sum6 = tab11c1_8031 + tab11c1_8032 + tab11c1_8033 + tab11c1_8034 + tab11c1_8035;

        // fixuri pentru cazurile cand eroarea se arata in randul gresit
        for (var j = nr_rand_7000 - 1; j < nr_rand_7000; j++) {
            if (j < 0) {
                break;
            }

            // Validarea 7
            if ((tab1c2_7000 != tab11c1_7000 || tab1c2_7000 != sum1)) {
                webform.errors.push({
                    'fieldName': Number(values.CAP1_R_C02[i]),
                    'weight': 7,
                    'index': j,
                    'msg': concatMessage("01-007",
                        Drupal.t("Cap.1: [Rind.7000, Col.2] = Cap.1.1: [Rind.7000, Col.1] = Cap.1.1: [Rind.7010+7020+7030+7040+7050, Col.1]: @col2 = @col1 = @sum", { '@col2': tab1c2_7000, '@col1': tab11c1_7000, '@sum': sum1 })
                    ),
                });
            }

            /*// Validarea 15
            if ((tab1c13_7000 > 0 && (caem != 'D3512' || caem != 'D3513' || caem != 'D3514')) || (tab1c13_7000 = 0 && (caem == 'D3512' || caem == 'D3513' || caem == 'D3514'))) {
              webform.warnings.push({
                'fieldName': Number(values.CAP1_R_C13[i]),
                'weight': 15,
                'index': j,
                'msg': concatMessage("01-015",
                  Drupal.t("Cap.1: [Rînd.7000, Col.13] > 0, valabil pentru rețele electrice (CAEM-2: D3512, D3513 sau D3514)")
                ),
              });
            }*/
        }
        /*for (var j0 = nr_rand_7010_11 - 1; j0 < nr_rand_7010_11; j0++) {
          if (j0 < 0) {
            break;
          }
    
          // Validarea 8
          if (tab11c1_7010 != sum2) {
            webform.errors.push({
              'fieldName': Number(values.CAP11_R_C01[i]),
              'weight': 8,
              'index': j0,
              'msg': concatMessage("01-1-008",
                Drupal.t("Cap.1.1: [Rind.7010, Col.1] = [Rind.7011+7012+7013+7014+7015, Col.1]. @col1 = @sum", {'@col1': tab11c1_7010, '@sum': sum2})
              ),
            });
          }
        }*/

        /*for (var j1 = nr_rand_7050_11 - 1; j1 < nr_rand_7050_11; j1++) {
          if (j1 < 0) {
            break;
          }
    
          // Validarea 9
          if (tab11c1_7050 != sum3 && array_7000_7055_11.includes(7050) && (array_7000_7055_11.includes(7051) || array_7000_7055_11.includes(7052) || array_7000_7055_11.includes(7053) || array_7000_7055_11.includes(7054) || array_7000_7055_11.includes(7055))) {
            webform.errors.push({
              'fieldName': Number(values.CAP11_R_C01[i]),
              'weight': 9,
              'index': j1,
              'msg': concatMessage("01-1-009",
                Drupal.t("Cap.1.1: [Rind.7050, Col.1] = [Rind.7051+7052+7053+7054+7055, Col.1]. @col1 = @sum", {'col1': tab11c1_7050, '@sum': sum3})
              ),
            });
          }
        }*/
        /*for (var j2 = nr_rand_8000_11 - 1; j2 < nr_rand_8000_11; j2++) {
          if (j2 < 0) {
            break;
          }
    
          // Validarea 10
          if ((tab1c2_8000 != tab11c1_8000 || tab1c2_8000 != sum4)) {
            webform.errors.push({
              'fieldName': Number(values.CAP1_R_C02[i]),
              'weight': 10,
              'index': j2,
              'msg': concatMessage("01-010",
                Drupal.t("Cap.1: [Rind.8000, Col.2] = Cap.1.1: [Rind.8000, Col.1] = [Rind.8010+8030+8040+8050+8060, Col.1]. @col2 = @col1 = @sum", {'@col1': tab11c1_8000, '@col2': tab1c2_8000, '@sum': sum4})
              ),
            });
          }
    
          // Validarea 14
          if (tab11c1_8000 < tab11c1_8001) {
            webform.errors.push({
              'fieldName': 'CAP11_R_C01',
              'weight': 14,
              'index': j2,
              'msg': concatMessage("01-1-014",
                Drupal.t("Cap.1.1: [Rind.8000, Col.1] >= [Rind.8001, Col.1]")
              ),
            });
          }
        }*/
        /*for (var j3 = nr_rand_8010_11 - 1; j3 < nr_rand_8010_11; j3++) {
          if (j3 < 0) {
            break;
          }
    
          // Validarea 11
          if (tab11c1_8010 != sum5 && array_8000_8060_11.includes(8010) && (array_8000_8060_11.includes(8011) || array_8000_8060_11.includes(8012) || array_8000_8060_11.includes(8013) || array_8000_8060_11.includes(8014) || array_8000_8060_11.includes(8015))) {
            webform.errors.push({
              'fieldName': 'CAP11_R_C01',
              'weight': 11,
              'index': j3,
              'msg': concatMessage("01-1-011",
                Drupal.t("Cap.1.1: [Rind.8010, Col.1] = [Rind.8011+8012+8013+8014+8015, Col.1]. @col1 = @sum", {'@col1': tab11c1_8010, '@sum': sum5})
              ),
            });
          }
        }*/
        /*for (var j4 = nr_rand_8030_11 - 1; j4 < nr_rand_8030_11; j4++) {
          if (j4 < 0) {
            break;
          }
    
          // Validarea 12
          if (tab11c1_8030 != sum6 && array_8000_8060_11.includes(8030) && (array_8000_8060_11.includes(8031) || array_8000_8060_11.includes(8032) || array_8000_8060_11.includes(8033) || array_8000_8060_11.includes(8034) || array_8000_8060_11.includes(8035))) {
            webform.errors.push({
              'fieldName': 'CAP11_R_C01',
              'weight': 12,
              'index': j4,
              'msg': concatMessage("01-1-012",
                Drupal.t("Cap.1.1: [Rind.8030, Col.1] = [Rind.8031+8032+8033+8034+8035, Col.1]. @col1 = @sum", {'@col1': tab11c1_8030, '@sum': sum6})
              ),
            });
          }
        }*/

        let sumaDupaTab12A = {};
        let sumaDupaTab12A_col2 = {};
        let indexRandDupaTab12A = {};
        let indexRandDupaTab12A_col2 = {};
        var sumCap1Col2_0110_6200 = 0;
        var sumCap1Col6_0110_6200 = 0;
        var sumCap1Col6_0110_6200_ECHIV = 0;
        var sumCap1Col6_0110_0390 = 0;
        var sumCap1Col6_0110_0390_ECHIV = 0;
        var sumCap1Col6_4100_4699 = 0;
        var sumCap1Col6_4100_4699_ECHIV = 0;
        var sumCap1Col6_3000 = 0;
        var sumCap1Col6_4630 = 0;
        var sumCap1Col6_3000_ECHIV = 0;
        var sumCap1Col6_5111_6200 = 0;
        var sumCap1Col6_5111_6200_ECHIV = 0;
        var sumCap1Col6_1110_2000 = 0;
        var sumCap1Col6_1110_2000_ECHIV = 0;
        var sumCap1Col7_0110_6200 = 0;
        var sumCap1Col7_0110_6200_ECHIV = 0;
        var sumCap1Col7_0110_0390 = 0;
        var sumCap1Col7_0110_0390_ECHIV = 0;
        var sumCap1Col7_4100_4699 = 0;
        var sumCap1Col7_4100_4699_ECHIV = 0;
        var sumCap1Col7_3000 = 0;
        var sumCap1Col7_3000_ECHIV = 0;
        var sumCap1Col7_5111_6200 = 0;
        var sumCap1Col7_5111_6200_ECHIV = 0;
        var sumCap1Col7_1110_2000 = 0;
        var sumCap1Col7_1110_2000_ECHIV = 0;
        var sumCap1Col9 = 0;
        //CAPITOL I
        for (var i = 0; i < values.CAP1_R_CI.length; i++) {

            var sumCap12RaionsCol1 = 0;
            var sumCap12RaionsCol2 = 0;
            if (Number(values.CAP1_A[i]) == 4630 ||
                Number(values.CAP1_A[i]) == 46521 ||
                Number(values.CAP1_A[i]) == 46522 ||
                Number(values.CAP1_A[i]) == 4671 ||
                Number(values.CAP1_A[i]) == 4692) {
                // Capitolul I.II
                for (var k = 0; k < values.CAP12_R_CI.length; k++) {
                    var tab12a = Number(values.CAP12_A[k]); //cod tab1a
                    var tab12b = Number(values.CAP12_B[k]); //cod cuatm
                    var tab12c1 = Number(values.CAP12_R_C01[k]); //valoarea de sumat
                    let tab12c2 = Number(values.CAP12_R_C02[k]);
                    if (Number(values.CAP1_A[i]) == Number(values.CAP12_A[k])) {
                        sumCap12RaionsCol1 += Number(values.CAP12_R_C01[k]);
                        sumCap12RaionsCol2 += Number(values.CAP12_R_C02[k]);
                    }

                    //grupeaza sume pe cod tab12a si cuatm
                    if (!sumaDupaTab12A[tab12a]) {
                        sumaDupaTab12A[tab12a] = {};
                        indexRandDupaTab12A[tab12a] = [];
                    }
                    if (!sumaDupaTab12A_col2[tab12a]) {
                        sumaDupaTab12A_col2[tab12a] = {};
                        indexRandDupaTab12A_col2[tab12a] = [];
                    }
                    if (!sumaDupaTab12A[tab12a][tab12b]) {
                        sumaDupaTab12A[tab12a][tab12b] = 0;
                    }
                    if (!sumaDupaTab12A_col2[tab12a][tab12b]) {
                        sumaDupaTab12A_col2[tab12a][tab12b] = 0;
                    }

                    sumaDupaTab12A[tab12a][tab12b] += tab12c1;
                    sumaDupaTab12A_col2[tab12a][tab12b] += tab12c2;
                    indexRandDupaTab12A[tab12a].push(k);
                    indexRandDupaTab12A_col2[tab12a].push(k); //adaugarea indexului randului
                }
                // Validarea 43.1
                if (Number(values.CAP1_R_C10[i]) != sumCap12RaionsCol1) {
                    //Validarea 43.2
                    webform.errors.push({
                        'fieldName': Number(values.CAP1_A[i]),
                        'weight': 43,
                        'index': k,
                        'msg': concatMessage("01-2-002",
                            Drupal.t("Cap.1.2: Suma[Rind.[@CAP12_A], CUATM.*, Col.1] = Cap.1: [Rind.[@CAP1_A], Col.10] (pe toate rinduri) | @sumCap12 = @sumCap1", { '@CAP12_A': Number(values.CAP1_A[i]), '@CAP1_A': Number(values.CAP1_A[i]), '@sumCap12': sumCap12RaionsCol1, '@sumCap1': Number(values.CAP1_R_C10[i]) })
                        ),
                    });
                }
                if (Number(values.CAP1_R_C11[i]) != sumCap12RaionsCol2) {
                    //Validarea 43.2
                    webform.errors.push({
                        'fieldName': Number(values.CAP1_A[i]),
                        'weight': 44,
                        'index': k,
                        'msg': concatMessage("01-2-003",
                            Drupal.t("Cap.1.2: Suma[Rind.[@CAP12_A], CUATM.*, Col.2] = Cap.1: [Rind.[@CAP1_A], Col.11] (pe toate rinduri) | @sumCap12 = @sumCap1", { '@CAP12_A': Number(values.CAP1_A[i]), '@CAP1_A': Number(values.CAP1_A[i]), '@sumCap12': sumCap12RaionsCol2, '@sumCap1': Number(values.CAP1_R_C11[i]) })
                        ),
                    });
                }
            }
            if (Number(values.CAP1_R_C09[i]) > 0) {
                var cap2Col1Exists = 0;
                for (var k = 0; k < values.CAP2_R_CI.length; k++) {
                    if (Number(values.CAP1_A[i]) == Number(values.CAP2_A[k]) && Number(values.CAP2_R_C01[k]) > 0) {
                        cap2Col1Exists = 1;
                        if (Number(values.CAP2_R_C01[k]) != Number(values.CAP1_R_C09[i])) {
                            webform.errors.push({
                                'fieldName': '',
                                'weight': 42,
                                'index': 42,
                                'msg': concatMessage("02-001",
                                    Drupal.t("Cap1: [Rind.@CAP1_A, Col.9] > 0, atunci Cap.2: Suma[Rind.[@CAP2_A]], Col.1] > 0: @CAP1_C9 <> @CAP2_C1", { '@CAP1_A': Number(values.CAP1_A[i]), '@CAP2_A': Number(values.CAP2_A[k]), '@CAP1_C9': Number(values.CAP1_R_C09[i]), '@CAP2_C1': Number(values.CAP2_R_C01[k]) })
                                ),
                            });
                        }
                    }
                }
                if (cap2Col1Exists == 0) {
                    webform.errors.push({
                        'fieldName': '',
                        'weight': 42,
                        'index': 42,
                        'msg': concatMessage("02-001",
                            Drupal.t("Nu exista Rind.@CAP1_A in Capitolul II", { '@CAP1_A': Number(values.CAP1_A[i]) })
                        ),
                    });
                }
            }
            //duplicate row in cap1
            for (var k = 0; k < values.CAP1_R_CI.length; k++) {
                if (i != k && Number(values.CAP1_A[i]) == Number(values.CAP1_A[k]) && i < k) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP1_A[i]),
                        'weight': 2,
                        'index': 2,
                        'msg': concatMessage("00-002",
                            Drupal.t("Rind.@CAP1_A in Capitolul I este dublat", { '@CAP1_A': Number(values.CAP1_A[i]) })
                        ),
                    });
                }
            }
            //duplicate row in cap11
            for (var k = 0; k < values.CAP11_R_CI.length; k++) {
                if (i != k && Number(values.CAP11_A[i]) == Number(values.CAP11_A[k]) && i < k) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP11_A[i]),
                        'weight': 3,
                        'index': 3,
                        'msg': concatMessage("00-003",
                            Drupal.t("Rind.@CAP11_A in Capitolul I.I este dublat", { '@CAP11_A': Number(values.CAP11_A[i]) })
                        ),
                    });
                }
            }

            if ((Number(values.CAP1_A[i]) >= 110 && Number(values.CAP1_A[i]) <= 6200) || Number(values.CAP1_A[i]) == 46801 || Number(values.CAP1_A[i]) == 46802 ||
                Number(values.CAP1_A[i]) == 46521 || Number(values.CAP1_A[i]) == 46522) {
                sumCap1Col2_0110_6200 += Number(values.CAP1_R_C02[i]);
                sumCap1Col6_0110_6200 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_0110_6200_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_0110_6200 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_0110_6200_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
            if (Number(values.CAP1_A[i]) >= 110 && Number(values.CAP1_A[i]) <= 390) {
                sumCap1Col6_0110_0390 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_0110_0390_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_0110_0390 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_0110_0390_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
            if ((Number(values.CAP1_A[i]) >= 4100 && Number(values.CAP1_A[i]) <= 4699) || Number(values.CAP1_A[i]) == 46801 || Number(values.CAP1_A[i]) == 46802 ||
                Number(values.CAP1_A[i]) == 46521 || Number(values.CAP1_A[i]) == 46522) {
                sumCap1Col6_4100_4699 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_4100_4699_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_4100_4699 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_4100_4699_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
            if (Number(values.CAP1_A[i]) == 3000) {
                sumCap1Col6_3000 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_3000_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_3000 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_3000_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
            if (Number(values.CAP1_A[i]) == 4630) {
                sumCap1Col6_4630 += Number(values.CAP1_R_C06[i]);
            }
            if (Number(values.CAP1_A[i]) >= 5111 && Number(values.CAP1_A[i]) <= 6200) {
                sumCap1Col6_5111_6200 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_5111_6200_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_5111_6200 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_5111_6200_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
            if (Number(values.CAP1_A[i]) >= 1110 && Number(values.CAP1_A[i]) <= 2000) {
                sumCap1Col6_1110_2000 += Number(values.CAP1_R_C06[i]);
                sumCap1Col6_1110_2000_ECHIV += Number(values.CAP1_R_C06[i]) * Number(values.CAP1_R_ECHIV[i]);
                sumCap1Col7_1110_2000 += Number(values.CAP1_R_C07[i]);
                sumCap1Col7_1110_2000_ECHIV += Number(values.CAP1_R_C07[i]) * Number(values.CAP1_R_ECHIV[i]);
            }
        }
        //CAPITOL I.I
        var sumCap11Col1_8010_8030 = 0;
        var sumCap11Col1_8011_8031 = 0;
        var sumCap11Col1_7012_7052 = 0;
        var sumCap11Col1_8012_8032 = 0;
        var sumCap11Col1_7013_7053 = 0;
        var sumCap11Col1_8013_8033 = 0;
        var sumCap11Col1_7015_7055 = 0;
        var sumCap11Col1_8015_8035 = 0;
        var sumCap11Col1_7014_7054 = 0;
        var sumCap11Col1_8014_8034 = 0;
        var sumCap11Col1_7011_7051 = 0;
        var sumCap11Col1_8011_8031 = 0;
        var sumCap11Col1_7010_7050 = 0;
        var sumCap11Col1_7011_7015 = 0;
        var sumCap11Col1_7051_7055 = 0;
        var sumCap11Col1_8010_8060 = 0;
        var sumCap11Col1_8011_8015 = 0;
        var sumCap11Col1_8031_8035 = 0;
        var sumCap11Col1_8051_8055 = 0;
        for (var i = 0; i < values.CAP11_R_CI.length; i++) {
            if (Number(values.CAP11_A[i]) == 8010 || Number(values.CAP11_A[i]) == 8030) {
                sumCap11Col1_8010_8030 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) >= 7011 && Number(values.CAP11_A[i]) <= 7015) {
                sumCap11Col1_7011_7015 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) >= 7051 && Number(values.CAP11_A[i]) <= 7055) {
                sumCap11Col1_7051_7055 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) == 8010 || Number(values.CAP11_A[i]) == 8030 || Number(values.CAP11_A[i]) == 8040 ||
                Number(values.CAP11_A[i]) == 8050 || Number(values.CAP11_A[i]) == 8060) {
                sumCap11Col1_8010_8060 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) >= 8011 && Number(values.CAP11_A[i]) <= 8015) {
                sumCap11Col1_8011_8015 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) >= 8031 && Number(values.CAP11_A[i]) <= 8035) {
                sumCap11Col1_8031_8035 += Number(values.CAP11_R_C01[i]);
            }
            if (Number(values.CAP11_A[i]) >= 8051 && Number(values.CAP11_A[i]) <= 8055) {
                sumCap11Col1_8051_8055 += Number(values.CAP11_R_C01[i]);
            }
        }

        if (sumCap1Col2_0110_6200 > 0) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 17,
                'index': 17,
                'msg': concatMessage("01-017",
                    Drupal.t("Cap.1: [Rînd.0110...6200, Col.2] > 0 (necesită validare): Fabricați aceste produse?")
                ),
            });
        }
        if ((sumCap1Col6_0110_6200 > 0 && (tab11c1_7010 + tab11c1_7050) == 0) || (sumCap1Col6_0110_6200 == 0 && (tab11c1_7010 + tab11c1_7050) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 18,
                'index': 18,
                'msg': concatMessage("01-018",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [0110...6200], atunci Cap. I.I col. 1 > 0 rînd 7010, 7050 (și invers): Cap. I rînd [0110...0390] col6 = @sumCap1 dar Cap. I.I rînd[7010 + 7050] = @sumCap11", { '@sumCap1': sumCap1Col6_0110_6200, '@sumCap11': tab11c1_7010 + tab11c1_7050 })
                ),
            });
        }
        if ((sumCap1Col7_0110_6200 > 0 && (tab11c1_8010 + tab11c1_8030) == 0) || (sumCap1Col7_0110_6200 == 0 && (tab11c1_8010 + tab11c1_8030) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 19,
                'index': 19,
                'msg': concatMessage("01-019",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [0110...6200, atunci Cap. I.I col. 1 > 0 rînd 8010 + 8030 (si invers): Cap. I rînd [0110...6200] col7 = @sumCap1 dar Cap. I.I rînd[8010 + 8030] = @sumCap11", { '@sumCap1': sumCap1Col7_0110_6200, '@sumCap11': tab11c1_8010 + tab11c1_8030 })
                ),
            });
        }
        if ((sumCap1Col6_0110_0390 > 0 && (tab11c1_7011 + tab11c1_7051) == 0) || (sumCap1Col6_0110_0390 == 0 && (tab11c1_7011 + tab11c1_7051) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 20,
                'index': 20,
                'msg': concatMessage("01-020",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [0110...0390], atunci Cap. I.I col. 1 > 0 rînd 7011 + 7051 (si invers): Cap. I rînd [0110...0390] col6 = @sumCap1 dar Cap. I.I rînd[7011 + 7051] = @sumCap11", { '@sumCap1': sumCap1Col6_0110_0390, '@sumCap11': tab11c1_7011 + tab11c1_7051 })
                ),
            });
        }
        if ((sumCap1Col7_0110_0390 > 0 && (tab11c1_8011 + tab11c1_8031) == 0) || (sumCap1Col7_0110_0390 == 0 && (tab11c1_8011 + tab11c1_8031) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 21,
                'index': 21,
                'msg': concatMessage("01-021",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [0110...0390], atunci Cap. I.I col. 1 > 0 rînd 8011 + 8031 (si invers): Cap. I rînd [0110...0390] col7 = @sumCap1 dar Cap. I.I rînd[8011 + 8031] = @sumCap11", { '@sumCap1': sumCap1Col7_0110_0390, '@sumCap11': tab11c1_8011 + tab11c1_8031 })
                ),
            });
        }
        if ((sumCap1Col6_4100_4699 > 0 && (tab11c1_7012 + tab11c1_7052) == 0) || (sumCap1Col6_4100_4699 == 0 && (tab11c1_7012 + tab11c1_7052) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 22,
                'index': 22,
                'msg': concatMessage("01-022",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [4100...4699], atunci Cap. I.I col. 1 > 0 rînd 7012 + 7052 (si invers): Cap. I rînd [4100...4699] col6 = @sumCap1 dar Cap. I.I rînd[7012 + 7052] = @sumCap11", { '@sumCap1': sumCap1Col6_4100_4699, '@sumCap11': tab11c1_7012 + tab11c1_7052 })
                ),
            });
        }
        if ((sumCap1Col7_4100_4699 > 0 && (tab11c1_8012 + tab11c1_8032) == 0) || (sumCap1Col7_4100_4699 == 0 && (tab11c1_8012 + tab11c1_8032) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 23,
                'index': 23,
                'msg': concatMessage("01-023",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [4100...4699], atunci Cap. I.I col. 1 > 0 rînd 8012 + 8032 (si invers): Cap. I rînd [4100...4699] col7 = @sumCap1 dar Cap. I.I rînd[8012 + 8032] = @sumCap11", { '@sumCap1': sumCap1Col7_4100_4699, '@sumCap11': tab11c1_8012 + tab11c1_8032 })
                ),
            });
        }
        if ((sumCap1Col6_3000 > 0 && (tab11c1_7013 + tab11c1_7053) == 0) || (sumCap1Col6_3000 == 0 && (tab11c1_7013 + tab11c1_7053) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 24,
                'index': 24,
                'msg': concatMessage("01-024",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [3000], atunci Cap. I.I col. 1 > 0 rînd 7013 + 7053 (si invers): Cap. I rînd [3000] col6 = @sumCap1 dar Cap. I.I rînd[7013 + 7053] = @sumCap11", { '@sumCap1': sumCap1Col6_3000, '@sumCap11': tab11c1_7013 + tab11c1_7053 })
                ),
            });
        }
        if ((sumCap1Col7_3000 > 0 && (tab11c1_8013 + tab11c1_8033) == 0) || (sumCap1Col7_3000 == 0 && (tab11c1_8013 + tab11c1_8033) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 25,
                'index': 25,
                'msg': concatMessage("01-025",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [3000], atunci Cap I.I col. 1 > 0 rînd 8013 + 8033 (si invers): Cap. I rînd [3000] col7 = @sumCap1 dar Cap. I.I rînd[8013 + 8033] = @sumCap11", { '@sumCap1': sumCap1Col7_3000, '@sumCap11': tab11c1_8013 + tab11c1_8033 })
                ),
            });
        }
        if ((sumCap1Col6_5111_6200 > 0 && (tab11c1_7015 + tab11c1_7055) == 0) || (sumCap1Col6_5111_6200 == 0 && (tab11c1_7015 + tab11c1_7055) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 26,
                'index': 26,
                'msg': concatMessage("01-026",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [5111...6200], atunci Cap. I.I col. 1 > 0 rînd 7015 + 7055 (si invers): Cap. I rînd [5111...6200] col6 = @sumCap1 dar Cap. I.I rînd[7015 + 7053] = @sumCap11", { '@sumCap1': sumCap1Col6_5111_6200, '@sumCap11': tab11c1_7015 + tab11c1_7055 })
                ),
            });
        }
        if ((sumCap1Col7_5111_6200 > 0 && (tab11c1_8015 + tab11c1_8035) == 0) || (sumCap1Col7_5111_6200 == 0 && (tab11c1_8015 + tab11c1_8035) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 27,
                'index': 27,
                'msg': concatMessage("01-027",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [5111...6200], atunci Cap. I.I col. 1 > 0 rînd 8015 + 8035 (si invers): Cap. I rînd [5111...6200] col7 = @sumCap1 dar Cap. I.I rînd[8015 + 8035] = @sumCap11", { '@sumCap1': sumCap1Col7_5111_6200, '@sumCap11': tab11c1_8015 + tab11c1_8035 })
                ),
            });
        }
        if ((sumCap1Col6_1110_2000 > 0 && (tab11c1_7014 + tab11c1_7054) == 0) || (sumCap1Col6_1110_2000 == 0 && (tab11c1_7014 + tab11c1_7054) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 28,
                'index': 28,
                'msg': concatMessage("01-028",
                    Drupal.t("Dacă coloana 6 > 0 Cap. I rînd [1110...2000], atunci col. 1 > 0 Cap. I.I rînd 7014 + 7054 (si invers): Cap. I rînd [1110...2000] col6 = @sumCap1 dar Cap. I.I rînd[7014 + 7054] = @sumCap11", { '@sumCap1': sumCap1Col6_1110_2000, '@sumCap11': tab11c1_7014 + tab11c1_7054 })
                ),
            });
        }
        if ((sumCap1Col7_1110_2000 > 0 && (tab11c1_8014 + tab11c1_8034) == 0) || (sumCap1Col7_1110_2000 == 0 && (tab11c1_8014 + tab11c1_8034) > 0)) {
            webform.errors.push({
                'fieldName': '',
                'weight': 29,
                'index': 29,
                'msg': concatMessage("01-029",
                    Drupal.t("Dacă coloana 7 > 0 Cap. I rînd [1110...2000], atunci col. 1 > 0 Cap. I.I rînd 8014 + 8034 (si invers): Cap. I rînd [1110...2000] col7 = @sumCap1 dar Cap. I.I rînd[8014 + 8034] = @sumCap11", { '@sumCap1': sumCap1Col7_1110_2000, '@sumCap11': tab11c1_8014 + tab11c1_8034 })
                ),
            });
        }
        if ((sumCap1Col6_0110_0390_ECHIV / (tab11c1_7011 + tab11c1_7051)).toFixed(1) < 0.15 || (sumCap1Col6_0110_0390_ECHIV / (tab11c1_7011 + tab11c1_7051)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 30,
                'index': 30,
                'msg': concatMessage("01-030",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [0110...0390], Col.6 * Col.C] / [Cap.1.1, Rind.7011+7051, Col.1] <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_0110_0390_ECHIV / (tab11c1_7011 + tab11c1_7051)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_0110_0390_ECHIV / (tab11c1_8011 + tab11c1_8031)).toFixed(1) < 0.15 || (sumCap1Col7_0110_0390_ECHIV / (tab11c1_8011 + tab11c1_8031)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 31,
                'index': 31,
                'msg': concatMessage("01-031",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [0110...0390], Col.7 * Col.C] / [Cap.1.1, Rind.8011+8031, Col.1] <= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@sumFormula': (sumCap1Col7_0110_0390_ECHIV / (tab11c1_8011 + tab11c1_8031)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col6_4100_4699_ECHIV / (tab11c1_7012 + tab11c1_7052)).toFixed(1) < 0.15 || (sumCap1Col6_4100_4699_ECHIV / (tab11c1_7012 + tab11c1_7052)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 32,
                'index': 32,
                'msg': concatMessage("01-032",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [4100...4699], Col.6 * Col.C] / [Cap.1.1, Rind.7012+7052, Col.1] <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_4100_4699_ECHIV / (tab11c1_7012 + tab11c1_7052)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_4100_4699_ECHIV / (tab11c1_8012 + tab11c1_8032)).toFixed(1) < 0.15 || (sumCap1Col7_4100_4699_ECHIV / (tab11c1_8012 + tab11c1_8032)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 33,
                'index': 33,
                'msg': concatMessage("01-033",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [4100...4699], Col.7 * Col.C] / [Cap.1.1, Rind.8012+8032, Col.1] <= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@sumFormula': (sumCap1Col7_4100_4699_ECHIV / (tab11c1_8012 + tab11c1_8032)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col6_3000_ECHIV / (tab11c1_7013 + tab11c1_7053)).toFixed(1) < 0.15 || (sumCap1Col6_3000_ECHIV / (tab11c1_7013 + tab11c1_7053)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 34,
                'index': 34,
                'msg': concatMessage("01-034",
                    Drupal.t("Cap.1: 0.15 <= [Rind.3000, Col.6 * Col.C] / [Cap.1.1, Rind.7013+7053, Col.1] <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_3000_ECHIV / (tab11c1_7013 + tab11c1_7053)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_3000_ECHIV / (tab11c1_8013 + tab11c1_8033)).toFixed(1) < 0.15 || (sumCap1Col7_3000_ECHIV / (tab11c1_8013 + tab11c1_8033)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 35,
                'index': 35,
                'msg': concatMessage("01-035",
                    Drupal.t("Cap.1: 0.15 <= [Rind.3000, Col.7 * Col.C] / [Cap.1.1, Rind.8013+8033, Col.1] <= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@sumFormula': (sumCap1Col7_3000_ECHIV / (tab11c1_8013 + tab11c1_8033)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col6_5111_6200_ECHIV / (tab11c1_7015 + tab11c1_7055)).toFixed(1) < 0.15 || (sumCap1Col6_5111_6200_ECHIV / (tab11c1_7015 + tab11c1_7055)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 36,
                'index': 36,
                'msg': concatMessage("01-036",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [5111...6200], Col.6 * Col.C] / [Cap.1.1, Rind.7015+7055, Col.1] <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_5111_6200_ECHIV / (tab11c1_7015 + tab11c1_7055)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_5111_6200_ECHIV / (tab11c1_8015 + tab11c1_8035)).toFixed(1) < 0.15 || (sumCap1Col7_5111_6200_ECHIV / (tab11c1_8015 + tab11c1_8035)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 37,
                'index': 37,
                'msg': concatMessage("01-037",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [5111...6200], Col.7 * Col.C] / [Cap.1.1, Rind.8015+8035, Col.1] <= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@sumFormula': (sumCap1Col7_5111_6200_ECHIV / (tab11c1_8015 + tab11c1_8035)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col6_1110_2000_ECHIV / (tab11c1_7014 + tab11c1_7054)).toFixed(1) < 0.15 || (sumCap1Col6_1110_2000_ECHIV / (tab11c1_7014 + tab11c1_7054)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 38,
                'index': 38,
                'msg': concatMessage("01-038",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [1110...2000], Col.6 * Col.D] / [Cap.1.1, Rind.7014+7054, Col.1] <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_1110_2000_ECHIV / (tab11c1_7014 + tab11c1_7054)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_1110_2000_ECHIV / (tab11c1_8014 + tab11c1_8034)).toFixed(1) < 0.15 || (sumCap1Col7_1110_2000_ECHIV / (tab11c1_8014 + tab11c1_8034)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 39,
                'index': 39,
                'msg': concatMessage("01-039",
                    Drupal.t("Cap.1: 0.15 <= [Rind. [1110...2000], Col.7 * Col.C] / [Cap.1.1, Rind.8014+8034, Col.1] <= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@sumFormula': (sumCap1Col7_1110_2000_ECHIV / (tab11c1_8014 + tab11c1_8034)).toFixed(1) })
                ),
            });
        }
        if ((tab1c7_7000 / tab11c1_8040).toFixed(1) < 1.16 || (tab1c7_7000 / tab11c1_8040).toFixed(1) > 1.66) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 40,
                'index': 40,
                'msg': concatMessage("01-040",
                    Drupal.t("Cap.1: 1.16 <= [Rind.7000, Col.7] / [Cap.1.1, Rind.8040, Col.1] <= 1.66: (@sumFormula nu este in intervalul 1.16-1.66)", { '@sumFormula': (tab1c7_7000 / tab11c1_8040).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col6_0110_6200_ECHIV / (tab11c1_7010 + tab11c1_7050)).toFixed(1) < 0.15 || (sumCap1Col6_0110_6200_ECHIV / (tab11c1_7010 + tab11c1_7050)).toFixed(1) > 0.6) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 41,
                'index': 41,
                'msg': concatMessage("01-041",
                    Drupal.t("Cap.1: 0.15 <= [Rind.[0110...6200], Col.6 * Col.C] / [Cap.1.1, Rind.7010+7050, Col.1) <= 0.6: (@sumFormula nu este in intervalul 0.15-0.6)", { '@sumFormula': (sumCap1Col6_0110_6200_ECHIV / (tab11c1_7010 + tab11c1_7050)).toFixed(1) })
                ),
            });
        }
        if ((sumCap1Col7_0110_6200_ECHIV / (tab11c1_8010 + tab11c1_8030)).toFixed(1) < 0.15 || (sumCap1Col7_0110_6200_ECHIV / (tab11c1_8010 + tab11c1_8030)).toFixed(1) > 0.3) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 42,
                'index': 42,
                'msg': concatMessage("01-042",
                    Drupal.t("Cap.1: 0.15 <= [Rind.[0110...6200], Col.7 * Col.C] / [Cap.1.1, Rind.8010+8030, Col.1) <= 0.3. 0.15 >= @val >= 0.3: (@sumFormula nu este in intervalul 0.15-0.3)", { '@val': (sumCap1Col7_0110_6200_ECHIV / (tab11c1_8010 + tab11c1_8030)).toFixed(1), '@sumFormula': (sumCap1Col7_0110_6200_ECHIV / (tab11c1_8010 + tab11c1_8030)).toFixed(1) })
                ),
            });
        }
        //Capitolul I.I
        if (tab11c1_7010 != sumCap11Col1_7011_7015) {
            webform.errors.push({
                'fieldName': '',
                'weight': 8,
                'index': 8,
                'msg': concatMessage("01-1-008",
                    Drupal.t("Cap.1.1: [Rind.7010, Col.1] = [Rind.7011+7012+7013+7014+7015, Col.1]: @col1 = @sum", { '@col1': tab11c1_7010, '@sum': sumCap11Col1_7011_7015 })
                ),
            });
        }
        if (tab11c1_7050 != sumCap11Col1_7051_7055) {
            webform.errors.push({
                'fieldName': '',
                'weight': 9,
                'index': 9,
                'msg': concatMessage("01-1-009",
                    Drupal.t("Cap.1.1: [Rind.7050, Col.1] = [Rind.7051+7052+7053+7054+7055, Col.1]: @col1 = @sum", { '@col1': tab11c1_7050, '@sum': sumCap11Col1_7051_7055 })
                ),
            });
        }
        if (tab1c2_8000 != tab11c1_8000 || tab11c1_8000 != sumCap11Col1_8010_8060) {
            webform.errors.push({
                'fieldName': '',
                'weight': 10,
                'index': 10,
                'msg': concatMessage("01-010",
                    Drupal.t("Cap.1: [Rind.8000, Col.2] = Cap.1.1: [Rind.8000, Col.1] = [Rind.8010+8030+8040+8050+8060, Col.1]: @col2 = @col1 = @sum", { '@col1': tab11c1_8000, '@col2': tab1c2_8000, '@sum': sumCap11Col1_8010_8060 })
                ),
            });
        }
        if (tab11c1_8010 != sumCap11Col1_8011_8015) {
            webform.errors.push({
                'fieldName': '',
                'weight': 11,
                'index': 11,
                'msg': concatMessage("01-1-011",
                    Drupal.t("Cap.1.1: [Rind.8010, Col.1] = [Rind.8011+8012+8013+8014+8015, Col.1]: @col1 = @sum", { '@col1': tab11c1_8010, '@sum': sumCap11Col1_8011_8015 })
                ),
            });
        }
        if (tab11c1_8030 != sumCap11Col1_8031_8035) {
            webform.errors.push({
                'fieldName': '',
                'weight': 12,
                'index': 12,
                'msg': concatMessage("01-1-012",
                    Drupal.t("Cap.1.1: [Rind.8030, Col.1] = [Rind.8031+8032+8033+8034+8035, Col.1]: @col1 = @sum", { '@col1': tab11c1_8030, '@sum': sumCap11Col1_8031_8035 })
                ),
            });
        }
        if (tab11c1_7010 < tab11c1_7001) {
            webform.errors.push({
                'fieldName': '',
                'weight': 13,
                'index': 13,
                'msg': concatMessage("01-1-013",
                    Drupal.t("Cap.1.1: [Rind.7010, Col.1] >= [Rind.7001, Col.1], dar @r7010 >= @r7001", { '@r7010': tab11c1_7010, '@r7001': tab11c1_7001 })
                ),
            });
        }
        if ((tab11c1_7001 == 0 && (tab11c1_7010 > 0 || tab11c1_8010 > 0)) || (tab11c1_7001 > 0 && (tab11c1_7010 == 0 || tab11c1_8010 == 0))) {
            webform.errors.push({
                'fieldName': '',
                'weight': 13,
                'index': 13,
                'msg': concatMessage("01-1-0131",
                    Drupal.t("Cap.1.1: [Rind.7001, Col.1] > 0, daca Rind.7010 si 8010 > 0, dar Rind.7001 = @r7001, Rind.7010 = @r7010, Rind.8010 = @r8010", { '@r7001': tab11c1_7001, '@r7010': tab11c1_7010, '@r8010': tab11c1_8010 })
                ),
            });
        }
        if (tab11c1_8010 < tab11c1_8001) {
            webform.errors.push({
                'fieldName': '',
                'weight': 14,
                'index': 14,
                'msg': concatMessage("01-1-014",
                    Drupal.t("Cap.1.1: [Rind.8010, Col.1] >= [Rind.8001, Col.1], dar @r8010 >= @r8001", { '@r8010': tab11c1_8010, '@r8001': tab11c1_8001 })
                ),
            });
        }
        if ((tab11c1_8001 == 0 && (tab11c1_7010 > 0 || tab11c1_8010 > 0)) || (tab11c1_8001 > 0 && (tab11c1_7010 == 0 || tab11c1_8010 == 0))) {
            webform.errors.push({
                'fieldName': '',
                'weight': 13,
                'index': 13,
                'msg': concatMessage("01-1-0141",
                    Drupal.t("Cap.1.1: [Rind.8001, Col.1] > 0, daca Rind.7010 si 8010 > 0, dar Rind.8001 = @r8001, Rind.7010 = @r7010, Rind.8010 = @r8010", { '@r8001': tab11c1_8001, '@r7010': tab11c1_7010, '@r8010': tab11c1_8010 })
                ),
            });
        }
        if ((tab1c13_7000 > 0 && caem != 'D3512' && caem != 'D3513' && caem != 'D3514')) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 15,
                'index': 15,
                'msg': concatMessage("01-015",
                    Drupal.t("Cap.1: [Rînd.7000, Col.13] > 0, valabil pentru rețele electrice (CAEM-2: D3512, D3513 sau D3514)")
                ),
            });
        }
        if ((tab1c13_8000 > 0 && caem != 'D3511' && caem != 'D3530') /*|| (tab1c13_8000 == 0 &&(caem == 'D3511'|| caem == 'D3530'))*/) {
            webform.warnings.push({
                'fieldName': '',
                'weight': 16,
                'index': 16,
                'msg': concatMessage("01-016",
                    Drupal.t("Cap.1: [Rînd.8000, Col.13] > 0, valabil pentru rețele termice (CAEM-2: D3511 sau D3530)")
                ),
            });
        }

        /*// Capitolul I.II
        for (var k = 0; k < values.CAP12_R_CI.length; k++) {
    
          var existCodeCap1 = 0;
          for (var i = 0; i < values.CAP1_R_CI.length; i++) {
            if(Number(values.CAP1_A[i]) == Number(values.CAP12_A[k])){
              existCodeCap1 ++;
            }
          }
          // Validarea 43.1
          if (existCodeCap1 == 0) {
            //Validarea 43.2
            webform.errors.push({
              'fieldName': Number(values.CAP12_A[k]),
              'weight': 43,
              'index': k,
              'msg': concatMessage("01-2-004",
                Drupal.t("In Cap.1 nu exista codul: @CAP12_A", { '@CAP12_A': Number(values.CAP12_A[k])})
              ),
            });
          }
        }*/

        // Capitolul II
        let cap2_sums_col1 = {};
        let indexRandDupaTab2A_col1 = {};
        let col2ZeroAndCol3NonZeroExists = false;
        let col2NonZeroExists = false;
        let col2ZeroAndCol3NonZeroRows = [];
        let col3NonZeroExists = false;
        let col3ZeroAndCol2NonZeroRows = [];
        let col3ZeroAndCol2NonZeroExists = false;
        let col5ZeroAndCol6NonZeroExists = false;
        let col5NonZeroExists = false;
        let col6ZeroAndCol5NonZeroExists = false;
        let col6NonZeroExists = false;
        let col5ZeroAndCol6NonZeroRows = [];
        let col6ZeroAndCol5NonZeroRows = [];
        let duplicateSummaryRows = {};
        let summaryRowSeenForCode = new Map();
        let col3SumByCode = {};
        let col6SumByCode = {};
        var missR_0110_6200_Cap3R3_Col6 = 0;

        for (var k = 0; k < values.CAP2_R_CI.length; k++) {
            let tab2a = Number(values.CAP2_A[k]);
            let tab2c1 = Number(values.CAP2_R_C01[k]);
            let tab2c2 = Number(values.CAP2_R_C02[k]);
            let tab2c3 = Number(values.CAP2_R_C03[k]);
            let tab2c4 = Number(values.CAP2_R_C04[k]);
            let tab2c5 = Number(values.CAP2_R_C05[k]);
            let tab2c6 = Number(values.CAP2_R_C06[k]);
            let tab2c7 = Number(values.CAP2_R_C07[k]);
            let tab2c8 = Number(values.CAP2_R_C08[k]);
            let tab2c9 = Number(values.CAP2_R_C09[k]);
            let tab2c10 = Number(values.CAP2_R_C10[k]);

            let cap3_value1 = Number(values.CAP3_R03_C06);

            let input = values.CAP2_R_TEC[k];
            let tab2c_tec;

            if (typeof input === 'string' && input.includes('-')) {
                let [start, end] = input.split('-').map(Number);
                tab2c_tec = { start, end };
            } else {
                tab2c_tec = Number(input);
            }

            var tab2c_echiv = Number(values.CAP2_R_ECHIV[k]);

            // Validarea 1
            if (tab2c_echiv < tab2c_tec.start || tab2c_echiv > tab2c_tec.end) {
                webform.errors.push({
                    'fieldName': Number(values.CAP2_R_ECHIV[k]),
                    'weight': 1,
                    'index': i,
                    'msg': concatMessage("00-001",
                        Drupal.t("Echivalenţii calorici trebuie să respecte intervalul din clasificator (pe toate rînduri) Cap.2: [Rînd.@colA, Col.C] = @val nu respectă condiția (@start - @end)",
                            { '@colA': tab2a, '@val': tab2c_echiv, '@start': tab2c_tec.start, '@end': tab2c_tec.end })
                    ),
                });
            }

            //02-001
            if (Number(values.CAP2_R_C01[k]) > 0) {
                var cap1Col9Exists = 0;
                for (var i = 0; i < values.CAP1_R_CI.length; i++) {
                    if (Number(values.CAP1_A[i]) == Number(values.CAP2_A[k]) && Number(values.CAP2_R_C01[k]) > 0) {
                        cap1Col9Exists = 1;
                        if (Number(values.CAP1_R_C09[i]) != Number(values.CAP2_R_C01[k])) {
                            webform.errors.push({
                                'fieldName': '',
                                'weight': 42,
                                'index': 42,
                                'msg': concatMessage("02-001",
                                    Drupal.t("Cap1: [Rind.@CAP1_A, Col.9] > 0, atunci Cap.2: Suma[Rind.[@CAP2_A]], Col.1] > 0: @CAP1_C9 <> @CAP2_C1", { '@CAP1_A': Number(values.CAP1_A[i]), '@CAP2_A': Number(values.CAP2_A[k]), '@CAP1_C9': Number(values.CAP1_R_C09[i]), '@CAP2_C1': Number(values.CAP2_R_C01[k]) })
                                ),
                            });
                        }
                    }
                }
                if (cap1Col9Exists == 0) {
                    webform.errors.push({
                        'fieldName': '',
                        'weight': 42,
                        'index': 42,
                        'msg': concatMessage("02-001",
                            Drupal.t("Nu exista Rind.@CAP2_A in Capitolul I", { '@CAP2_A': Number(values.CAP2_A[k]) })
                        ),
                    });
                }
            }
            // IC-003
            if (Number(values.CAP3_R03_C06) > 0) {
                missR_0110_6200_Cap3R3_Col6 = 1;
                if (tab2a >= 110 && tab2a <= 6200 && tab2c9 > 0) {
                    missR_0110_6200_Cap3R3_Col6 = 0;
                }
            }

            let allowedColumns = ["CAP2_R_C02", "CAP2_R_C03", "CAP2_R_C05", "CAP2_R_C06"];

            /*// Validarea 52 
            if (tab2c5 !== 0) {
              if (tab2c5 < 3900) {
                webform.errors.push({
                  'fieldName': 'CAP2_R_C05',
                  'weight': 52,
                  'index': k,
                  'msg': concatMessage("02-008",
                    Drupal.t("Cap.2: [Col.5] poate să conțină date doar din clasificator IND-TR,grupa=5")
                  ),
                });
              }
            }*/

            /*// Validarea 51 
            if (tab2c2 !== 0) {
              if (tab2c2 < 500 || tab2c2 > 3900) {
                webform.errors.push({
                  'fieldName': 'CAP2_R_C02',
                  'weight': 51,
                  'index': k,
                  'msg': concatMessage("02-007",
                    Drupal.t("Cap.2: [Col.2] poate să conțină date doar din clasificator IND-TR,grupa=2")
                  ),
                });
              }
            }*/

            if (tab2c1 > 0) {
                if (!summaryRowSeenForCode.has(tab2a)) {
                    summaryRowSeenForCode.set(tab2a, k);
                } else {
                    if (!duplicateSummaryRows[tab2a]) {
                        duplicateSummaryRows[tab2a] = [];
                    }

                    duplicateSummaryRows[tab2a].push(k);
                }
            }

            if (Number(values.CAP2_R_C02[k]) == 0 && Number(values.CAP2_R_C03[k]) != 0) {
                var existsSubCodecol2 = 0;
                var existsSubCodecol5 = 0;
                for (var l = 0; l < values.CAP2_R_CI.length; l++) {
                    if (k < l && Number(values.CAP2_A[k]) == Number(values.CAP2_A[l])) {
                        if (Number(values.CAP2_R_C02[l]) != 0) {
                            existsSubCodecol2 = 1;
                        }
                    }
                    if (k < l && Number(values.CAP2_A[k]) == Number(values.CAP2_A[l])) {
                        if (Number(values.CAP2_R_C05[l]) != 0) {
                            existsSubCodecol5 = 1;
                        }
                    }
                }
                if (existsSubCodecol2 == 0) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP2_A[k]),
                        'weight': 47,
                        'index': 47,
                        'msg': concatMessage("02-003",
                            Drupal.t("Cap.2 Rind=@rind: Dacă [Col.2] = 0 și [Col.3] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.2]", { '@rind': Number(values.CAP2_A[k]) })
                        ),
                    });
                }
                if (existsSubCodecol2 == 0) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP2_A[k]),
                        'weight': 47,
                        'index': 47,
                        'msg': concatMessage("02-004",
                            Drupal.t("Cap.2 Rind=@rind: Dacă [Col.5] = 0 și [Col.6] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.5]", { '@rind': Number(values.CAP2_A[k]) })
                        ),
                    });
                }
            }
            /*// Validarea 49
            if (summaryRowSeenForCode.has(tab2a)) {
              if (tab2c1 === 0) {
                for (let column in values) {
                  if (column.startsWith("CAP2_R_") && !allowedColumns.includes(column)) {
                    let value = values[column][k];
      
                    if (!isNaN(Number(value)) && Number(value) !== 0) {
                      webform.errors.push({
                        'fieldName': column,
                        'weight': 49,
                        'index': k,
                        'msg': concatMessage("02-005",
                          Drupal.t("Cap.2: Pentru rindurile suplimentare se introduce doar [Col.2,3,5,6]")
                        ),
                      });
                    }
                  }
                }
              }
            }*/

            /*// Validarea 50
            for (let tab2a in duplicateSummaryRows) {
              duplicateSummaryRows[tab2a].forEach((index) => {
                webform.errors.push({
                  'fieldName': '',
                  'weight': 50,
                  'index': index,
                  'msg': concatMessage("02-006",
                    Drupal.t("Cap.2: Rîndul de sumar trebuie să fie unic")
                  ),
                });
              })
            }*/


            /*// Validarea 55
            if (tab2c1 !== 0) {
              if (summaryRowSeenForCode.has(tab2a) && summaryRowSeenForCode.get(tab2a) !== k) {
                webform.errors.push({
                  'fieldName': Number(values.CAP2_R_C01[k]),
                  'weight': 55,
                  'index': k,
                  'msg': concatMessage("02-011",
                    Drupal.t("Cap.2: [Col.1] poate fi specificată doar pentru rîndul de sumar")
                  ),
                });
              }
            } else {
              if (!summaryRowSeenForCode.has(tab2a)) {
                summaryRowSeenForCode.set(tab2a, k);
              }
            }*/

            /*// Validarea 56
            if (tab2c1 > 0) {
              if (tab2c2 !== 0 || tab2c5 !== 0) {
                webform.errors.push({
                  'fieldName': tab2c2 != 0 ? Number(values.CAP2_R_C02[k]): Number(values.CAP2_R_C05[k]),
                  'weight': 56,
                  'index': k,
                  'msg': concatMessage("02-012",
                    Drupal.t("Cap.2: Dacă [Col.1] > 0, atunci [Col.2 și 5] = 0")
                  ),
                });
              }
      
              // Validarea 57
              if ((tab2c2 > 0 || tab2c5 > 0) && tab2c1 !== 0) {
                webform.errors.push({
                  'fieldName': Number(values.CAP2_R_C01[k]),
                  'weight': 57,
                  'index': k,
                  'msg': concatMessage("02-013",
                    Drupal.t("Cap.2: Dacă [Col.2 sau 5] > 0, atunci [Col.1] = 0")
                  ),
                });
              }
        
              if (tab2c5 !== 0) {
                webform.errors.push({
                  'fieldName': Number(values.CAP2_R_C05[k]),
                  'weight': 56,
                  'index': k,
                  'msg': concatMessage("02-012",
                    Drupal.t("Cap.2: Dacă [Col.1] > 0, atunci [Col.2 și 5] = 0")
                  ),
                });
              }
            }*/

            let sumaCol = Number(values.CAP2_R_C03[k]) + Number(values.CAP2_R_C04[k]) + Number(values.CAP2_R_C06[k]) + Number(values.CAP2_R_C07[k]) + Number(values.CAP2_R_C08[k]) + Number(values.CAP2_R_C09[k]) + Number(values.CAP2_R_C10[k]);

            if (tab2c5 === 0 && tab2c6 !== 0) {
                col5ZeroAndCol6NonZeroExists = true;
                col5ZeroAndCol6NonZeroRows.push(i);
            }
            if (tab2c5 !== 0) {
                col5NonZeroExists = true;
            }
            if (tab2c6 === 0 && tab2c5 !== 0) {
                col6ZeroAndCol5NonZeroExists = true;
                col6ZeroAndCol5NonZeroRows.push(i);
            }
            if (tab2c6 !== 0) {
                col6NonZeroExists = true;
            }
            if (tab2c2 === 0 && tab2c3 !== 0) {
                col2ZeroAndCol3NonZeroExists = true;
                col2ZeroAndCol3NonZeroRows.push(k);
            }
            if (tab2c2 !== 0) {
                col2NonZeroExists = true;
            }
            if (tab2c2 !== 0 && tab2c3 === 0) {
                col3ZeroAndCol2NonZeroExists = true;
                col3ZeroAndCol2NonZeroRows.push(k);
            }
            if (tab2c3 !== 0) {
                col3NonZeroExists = true;
            }

            // Validarea 53
            if (tab2c1 == 0 && ((tab2c3 != 0 && tab2c2 == 0) || (tab2c3 == 0 && tab2c2 != 0))) {
                webform.errors.push({
                    'fieldName': '',
                    'weight': 53,
                    'index': k,
                    'msg': concatMessage("02-009",
                        Drupal.t("Cap.2: Dacă [Col.3] != 0, atunci [Col.2] != 0 (pentru toate rinduri suplimentare)")
                    ),
                });
            }

            // Validarea 54
            if (tab2c1 == 0 && ((tab2c6 != 0 && tab2c5 == 0) || (tab2c6 == 0 && tab2c5 != 0))) {
                webform.errors.push({
                    'fieldName': '',
                    'weight': 54,
                    'index': k,
                    'msg': concatMessage("02-010",
                        Drupal.t("Cap.2: Dacă [Col.6] != 0, atunci [Col.5] != 0 (pentru toate rinduri suplimentare)")
                    ),
                });
            }

            // Validarea 46
            if (tab2c1 !== sumaCol && (tab2c1 + tab2c4 + tab2c7 + tab2c8 + tab2c9 + tab2c9 + tab2c10) > 0) {
                webform.errors.push({
                    'fieldName': values.CAP2_R_C01[k],
                    'weight': 46,
                    'index': k,
                    'msg': concatMessage("02-002",
                        Drupal.t("Cap.2: Rind[@rind][Col.1] = [Col.3+4+6+7+8+9+10] (pe toate rinduri de sumat). @col1 = @sum", { '@rind': values.CAP2_A[k], '@col1': tab2c1, '@sum': sumaCol })
                    ),
                });
            }

            // Validarea 60
            if (tab2c1 === 0 && summaryRowSeenForCode.has(tab2a)) {
                if (tab2c4 !== 0 || tab2c7 !== 0 || tab2c8 !== 0 || tab2c9 !== 0 || tab2c10 !== 0) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP2_R_C04[k]),
                        'weight': 60,
                        'index': k,
                        'msg': concatMessage("02-016",
                            Drupal.t("Cap.2: Dacă [Col.1] = 0, atunci [Col.4,7,8,9,10] = 0 (pentru toate rindurile suplimentare)")
                        ),
                    });
                }
            }

            let caemCode = caem.replace(/^[A-Z]/, "").substring(0, 2);
            let col2Code = tab2c2.toString().substring(0, 2);
            var existsSubCodeCaem = 0;
            var existsCaemF = 0;
            for (var l = 0; l < values.CAP2_R_CI.length; l++) {
                if (k < l && Number(values.CAP2_A[k]) == Number(values.CAP2_A[l]) && Number(values.CAP2_R_C01[k]) > 0) {
                    if ((Number(values.CAP2_R_C02[l])).toString().substring(0, 2) == caemCode) {
                        existsSubCodeCaem = 1;
                    }
                }
                if (k > l && Number(values.CAP2_A[k]) == Number(values.CAP2_A[l])) {
                    if ((Number(values.CAP2_R_C02[l])).toString().substring(0, 2) == caemCode) {
                        existsSubCodeCaem = 1;
                    }
                }
            }

            // Validarea 60.1
            if (tab2c3 > 0 && tab2c1 == 0 && existsSubCodeCaem == 0) {
                if (col2Code !== caemCode) {
                    webform.warnings.push({
                        'fieldName': Number(values.CAP2_R_C02[k]),
                        'weight': 60,
                        'index': k,
                        'msg': concatMessage("02-017",
                            Drupal.t("Cap.2 Rind[@Rind]: [Col.2] trebuie să corespundă CAEM-2 al întreprinderii, dacă [Col.3] > 0: CAEM2=@caem, col2=@col2", { '@Rind': Number(values.CAP2_A[k]), '@caem': caem, '@col2': tab2c2 })
                        ),
                    });
                }
            }

            // Validarea 60.2
            if (tab2c4 > 0 && tab2c1 > 0) {
                if (caem.substring(0, 1) != "F") {
                    webform.warnings.push({
                        'fieldName': Number(values.CAP2_R_C02[k]),
                        'weight': 60,
                        'index': k,
                        'msg': concatMessage("02-018",
                            Drupal.t("Rind[@Rind] [Col.4] > 0 si CAEM2=@caem2, dar CAEM2 trebuie sa fie 'F',", { '@Rind': Number(values.CAP2_A[k]), '@caem2': caem })
                        ),
                    });
                }
            }

            // Validarea 60.3
            if (tab2c7 > 0 && tab2c1 > 0) {
                if (caem.substring(0, 1) != "A") {
                    webform.warnings.push({
                        'fieldName': Number(values.CAP2_R_C02[k]),
                        'weight': 60,
                        'index': k,
                        'msg': concatMessage("02-019",
                            Drupal.t("Rind[@Rind] [Col.4] > 0 si CAEM2=@caem2, dar CAEM2 trebuie sa fie 'A',", { '@Rind': Number(values.CAP2_A[k]), '@caem2': caem })
                        ),
                    });
                }
            }

            // Validarea 60.4
            if (tab2c8 > 0 && tab2c1 > 0) {
                if (caem.substring(0, 1) != "G" && caem.substring(0, 1) != "I" && caem.substring(0, 1) != "J") {
                    webform.warnings.push({
                        'fieldName': Number(values.CAP2_R_C02[k]),
                        'weight': 60,
                        'index': k,
                        'msg': concatMessage("02-020",
                            Drupal.t("Rind[@Rind] [Col.4] > 0 si CAEM2=@caem2, dar CAEM2 trebuie sa fie 'G','I' sau 'J'", { '@Rind': Number(values.CAP2_A[k]), '@caem2': caem })
                        ),
                    });
                }
            }

            if (Number(values.CAP2_A[k]) == 8000 && tab2c4 != 0) {
                webform.warnings.push({
                    'fieldName': Number(values.CAP2_A[k]),
                    'weight': 61,
                    'index': k,
                    'msg': concatMessage("02-021",
                        Drupal.t("Cap.2: Rind[@Rind] [Col.4] = @col4 > 0", { '@Rind': Number(values.CAP2_A[k]), '@col4': Number(values.CAP2_R_C04[k]) })
                    ),
                });
            }
            if (Number(values.CAP2_A[k]) == 8000 && tab2c6 != 0) {
                webform.warnings.push({
                    'fieldName': Number(values.CAP2_A[k]),
                    'weight': 61,
                    'index': k,
                    'msg': concatMessage("02-022",
                        Drupal.t("Cap.2: Rind[@Rind] [Col.6] = @col6 > 0", { '@Rind': Number(values.CAP2_A[k]), '@col6': Number(values.CAP2_R_C06[k]) })
                    ),
                });
            }
            if (Number(values.CAP2_R_C10[k] > 0)) {
                webform.warnings.push({
                    'fieldName': Number(values.CAP2_A[k]),
                    'weight': 61,
                    'index': k,
                    'msg': concatMessage("02-023",
                        Drupal.t("Cap.2:Rind.[@Rind] Col.10 se completează doar în cazuri excepționale! @Rind=@col10 necesita atentie", { '@Rind': Number(values.CAP2_A[k]), '@col10': Number(values.CAP2_R_C10[k]) })
                    ),
                });
            }
            if (!cap2_sums_col1[tab2a]) {
                cap2_sums_col1[tab2a] = 0;
                indexRandDupaTab2A_col1[tab2a] = [];
            }

            cap2_sums_col1[tab2a] += tab2c1;
            indexRandDupaTab2A_col1[tab2a].push(k);

            // Calcularea sumei Col 3 pentru fiecare cod tab2a
            if (!col3SumByCode[tab2a]) {
                col3SumByCode[tab2a] = 0;
            }
            if (tab2c1 === 0) {
                col3SumByCode[tab2a] += tab2c3;
            }
            // Calcularea sumei Col 6 pentru fiecare cod tab2a
            if (!col6SumByCode[tab2a]) {
                col6SumByCode[tab2a] = 0;
            }
            if (tab2c1 === 0) {
                col6SumByCode[tab2a] += tab2c6;
            }
        }
        if (missR_0110_6200_Cap3R3_Col6 == 1) {
            webform.errors.push({
                'fieldName': Number(values.CAP2_R_C09[k]),
                'weight': 75,
                'index': k,
                'msg': concatMessage("IC-003",
                    Drupal.t("Dacă Cap.3: [Rînd.03, Col.6] > 0, atunci Cap.2: [Rînd.0110...6200, Col.9] > 0")
                ),
            });
        }

        // Verificarea valorilor pentru randurile sumar
        for (var k = 0; k < values.CAP2_R_CI.length; k++) {
            let tab2a = Number(values.CAP2_A[k]);
            let tab2c1 = Number(values.CAP2_R_C01[k]);
            let tab2c3 = Number(values.CAP2_R_C03[k]);
            let tab2c6 = Number(values.CAP2_R_C06[k]);

            // Daca un rand este sumar (Col. 1 > 0), verificam suma Col. 3
            if (tab2c1 > 0) {
                let expectedSum = col3SumByCode[tab2a] || 0;

                if (tab2c3 !== expectedSum) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP2_R_C03[k]),
                        'weight': 58,
                        'index': k,
                        'msg': concatMessage("02-014",
                            Drupal.t("Cap.2: [Rind.sumar[@tab2a], Col.3] = Suma[Rind.suplimentare[@tab2a], Col.3]. @col3 = @sum", { '@col3': tab2c3, '@sum': expectedSum, '@tab2a': tab2a })
                        ),
                    });
                }
            }

            // Daca un rand este sumar (Col. 1 > 0), verificam suma Col. 6
            if (tab2c1 > 0) {
                let expectedSum1 = col6SumByCode[tab2a] || 0;

                if (tab2c6 !== expectedSum1) {
                    webform.errors.push({
                        'fieldName': Number(values.CAP2_R_C06[k]),
                        'weight': 59,
                        'index': k,
                        'msg': concatMessage("02-015",
                            Drupal.t("Cap.2: [Rind.sumar[@tab2a], Col.6] = Suma[Rind.suplimentare[@tab2a], Col.6]. @col6 = @sum", { '@col6': tab2c6, '@sum': expectedSum1, '@tab2a': tab2a })
                        ),
                    });
                }
            }
        }

        /*// Validarea 48
        if (col5ZeroAndCol6NonZeroExists && !col5NonZeroExists) {
          col5ZeroAndCol6NonZeroRows.forEach((index) => {
            webform.errors.push({
              'fieldName': '',
              'weight': 48,
              'index': index,
              'msg': concatMessage("02-004",
                Drupal.t("Cap.2: Dacă [Col.5] = 0 și [Col.6] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.5]")
              ),
            });
          })
        }*/
        /*if (col6ZeroAndCol5NonZeroExists && !col6NonZeroExists) {
          col6ZeroAndCol5NonZeroRows.forEach((index) => {
            webform.errors.push({
              'fieldName': '',
              'weight': 48,
              'index': index,
              'msg': concatMessage("02-004",
                Drupal.t("Cap.2: Dacă [Col.6] = 0 și [Col.5] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.6]")
              ),
            });
          })
        }
    
        // Validarea 47
        if (col2ZeroAndCol3NonZeroExists && !col2NonZeroExists) {
          col2ZeroAndCol3NonZeroRows.forEach((index) => {
            webform.errors.push({
              'fieldName': '',
              'weight': 47,
              'index': index,
              'msg': concatMessage("02-003",
                Drupal.t("Cap.2: Dacă [Col.2] = 0 și [Col.3] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.2]")
              ),
            });
          })
        }
        if (col3ZeroAndCol2NonZeroExists && !col3NonZeroExists) {
          col3ZeroAndCol2NonZeroRows.forEach((index) => {
            webform.errors.push({
              'fieldName': '',
              'weight': 47,
              'index': index,
              'msg': concatMessage("02-003",
                Drupal.t("Cap.2: Dacă [Col.3] = 0 și [Col.2] != 0, atunci trebuie să fie cel puțin un rînd cu specificația detaliată în [Col.3]")
              ),
            });
          })
        }*/

        /*for (let tab2a in cap2_sums_col1) {
          let sumCap2 = cap2_sums_col1[tab2a];
          let correspondingCap1Value = valori_cap1_col9[tab2a];
    
          //Validarea 45
          if (correspondingCap1Value === undefined || sumCap2 !== correspondingCap1Value) {
            indexRandDupaTab2A_col1[tab2a].forEach((index) => {
              webform.errors.push({
                'fieldName': '',
                'weight': 45,
                'index': index,
                'msg': concatMessage("02-001",
                  Drupal.t("Cap.2: Suma[Rind.*, Col.1] = Cap1: [Rind.*, Col.9] (pe toate rindurile): ∑ Cap2Col1 = @CAP2_A != ∑ Cap1Col9 = @CAP1_A", { '@CAP2_A': tab2a, '@CAP1_A': tab2a })
                ),
              });
            })
          }
        }*/


        /*for (let tab12a in sumaDupaTab12A) { //calculare suma totala pe fiecare grup de tab12a si validare
          let sumaTotala = 0;
    
          for (let tab12b in sumaDupaTab12A[tab12a]) {
            sumaTotala += sumaDupaTab12A[tab12a][tab12b];
          }
    
          //gasirea valorii din Cap 1
          let valoareaCap1Coresp = valori_cap1[tab12a] ? valori_cap1[tab12a].col10 : null;
    
          if (valoareaCap1Coresp === null || sumaTotala !== valoareaCap1Coresp) {
    
            indexRandDupaTab12A[tab12a].forEach((index) => {
    
              //Validarea 43.2
              webform.errors.push({
                'fieldName': 'CAP12_B',
                'weight': 43,
                'index': index,
                'msg': concatMessage("01-2-002",
                  Drupal.t("Cap.1.2: Suma[Rind.[@CAP12_A], CUATM.*, Col.1] = Cap.1: [Rind.[@CAP1_A], Col.10] (pe toate rinduri)", { '@CAP12_A': tab12a, '@CAP1_A': tab12a })
                ),
              });
            })
          }
        }
        for (let tab12a in sumaDupaTab12A_col2) { //calculare suma totala pe fiecare grup de tab12a si validare
          let sumaTotala = 0;
    
          for (let tab12b in sumaDupaTab12A_col2[tab12a]) {
            sumaTotala += sumaDupaTab12A_col2[tab12a][tab12b];
          }
    
          //gasirea valorii din Cap 1
          let valoareaCap1Coresp_col11 = valori_cap1_col11[tab12a] ? valori_cap1_col11[tab12a].col10 : null;
    
          if (valoareaCap1Coresp_col11 === null || sumaTotala !== valoareaCap1Coresp_col11) {
    
            indexRandDupaTab12A_col2[tab12a].forEach((index) => {
    
              //Validarea 44
              webform.errors.push({
                'fieldName': 'CAP12_B',
                'weight': 44,
                'index': index,
                'msg': concatMessage("01-2-003",
                  Drupal.t("Cap.1.2: Suma[Rind.[@CAP12_A], CUATM.*, Col.2] = Cap.1: [Rind.[@CAP1_A], Col.11] (pe toate rinduri)", { '@CAP12_A': tab12a, '@CAP1_A': tab12a })
                ),
              });
            })
          }
        }*/

        // Cap. III
        let columns = ["C01", "C02", "C03", "C04", "C05", "C06"];
        let rind999 = Number(values.CAP3_R999_C01 || 0);

        if (!isNaN(rind999)) {

            //Validarea 61
            if (rind999 <= 0) {
                webform.errors.push({
                    'fieldName': 'CAP3_R999_C01',
                    'weight': 61,
                    'msg': concatMessage("03-001",
                        Drupal.t("Cap.3: [Rind.999, Col.1] > 0")
                    ),
                });
            }
        }

        columns.forEach(col => {
            let rind01 = Number(values[`CAP3_R01_${col}`] || 0);
            let rind02 = Number(values[`CAP3_R02_${col}`] || 0);
            let rind03 = Number(values[`CAP3_R03_${col}`] || 0);
            let rind04 = Number(values[`CAP3_R04_${col}`] || 0);
            let rind05 = Number(values[`CAP3_R05_${col}`] || 0);
            let rind06 = Number(values[`CAP3_R06_${col}`] || 0);

            let suma = rind02 + rind04 + rind05 + rind06;

            /*// Validarea 62
            if (rind01 !== suma) {
              webform.errors.push({
                'fieldName': `CAP3_R01_${col}`,
                'weight': 62,
                'msg': concatMessage("03-002",
                  Drupal.t("Cap.3: [Rind.01] = Suma[Rind.02+04+05+06] (pe toate coloane). @rind1 = @sum", {'@rind1': rind01, '@suma': suma})
                ),
              });
            }*/

            // Validarea 63
            if (rind02 < rind03) {
                webform.errors.push({
                    'fieldName': `CAP3_R02_${col}`,
                    'weight': 63,
                    'msg': concatMessage("03-003",
                        Drupal.t("Cap.3: [Rind.02].Col.@col >= [Rind.03].Col.@col: @rind2 < @rind3", { '@col': (col).toString().substring(2, 3), '@rind2': rind02, '@rind3': rind03 })
                    ),
                });
            }
        })

        // Validarea 64
        if (((Number(values.CAP3_R02_C03) + Number(values.CAP3_R02_C05)) / Number(values.CAP3_R02_C01)).toFixed(1) >= 20) {
            webform.errors.push({
                'fieldName': 'CAP3_R02_C01',
                'weight': 64,
                'msg': concatMessage("03-004",
                    Drupal.t("Cap.3: [Rind.02]: [Col.3+5] / [Col.1] < 20: @col35/@col1=@result", { '@col35': (Number(values.CAP3_R02_C03) + Number(values.CAP3_R02_C05)), '@col1': Number(values.CAP3_R02_C01), '@result': (Number(values.CAP3_R02_C03) + Number(values.CAP3_R02_C05)) / Number(values.CAP3_R02_C01) })
                ),
            });
        }
        if (((Number(values.CAP3_R03_C03) + Number(values.CAP3_R03_C05)) / Number(values.CAP3_R03_C01)).toFixed(1) >= 20) {
            webform.errors.push({
                'fieldName': 'CAP3_R03_C01',
                'weight': 64,
                'msg': concatMessage("03-004",
                    Drupal.t("Cap.3: [Rind.03]: [Col.3+5] / [Col.1] < 20: @col35/@col1=@result", { '@col35': (Number(values.CAP3_R03_C03) + Number(values.CAP3_R03_C05)), '@col1': Number(values.CAP3_R03_C01), '@result': (Number(values.CAP3_R03_C03) + Number(values.CAP3_R03_C05)) / Number(values.CAP3_R03_C01) })
                ),
            });
        }

        if (Number(values.CAP3_R04_C01) > 0) {
            let raport = (Number(values.CAP3_R04_C03) + Number(values.CAP3_R04_C05)) / Number(values.CAP3_R04_C01);

            // Validarea 65
            if (raport < 20 || raport >= 50) {
                webform.errors.push({
                    'fieldName': `CAP3_R04_C03`,
                    'weight': 65,
                    'msg': concatMessage("03-005",
                        Drupal.t("Cap.3: [Rind.04]: 20 <= [Col.3+5] / [Col.1] < 50: @col35/@col1=@result", { '@col35': (Number(values.CAP3_R04_C03) + Number(values.CAP3_R04_C05)), '@col1': Number(values.CAP3_R04_C01), '@result': (Number(values.CAP3_R04_C03) + Number(values.CAP3_R04_C05)) / Number(values.CAP3_R04_C01) })
                    ),
                });
            }
        }

        if (Number(values.CAP3_R05_C01) > 0) {
            let raport = (Number(values.CAP3_R05_C03) + Number(values.CAP3_R05_C05)) / Number(values.CAP3_R05_C01);

            // Validarea 66
            if (raport < 50 || raport >= 100) {
                webform.errors.push({
                    'fieldName': `CAP3_R05_C03`,
                    'weight': 66,
                    'msg': concatMessage("03-006",
                        Drupal.t("Cap.3: [Rind.05]: 50 <= [Col.3+5] / [Col.1] < 100: @col35/@col1=@result", { '@col35': (Number(values.CAP3_R05_C03) + Number(values.CAP3_R05_C05)), '@col1': Number(values.CAP3_R05_C01), '@result': (Number(values.CAP3_R05_C03) + Number(values.CAP3_R05_C05)) / Number(values.CAP3_R05_C01) })
                    ),
                });
            }
        }

        if (Number(values.CAP3_R06_C01) > 0) {
            let raport = (Number(values.CAP3_R06_C03) + Number(values.CAP3_R06_C05)) / Number(values.CAP3_R06_C01);

            // Validarea 67
            if (raport < 100) {
                webform.errors.push({
                    'fieldName': `CAP3_R06_C03`,
                    'weight': 67,
                    'msg': concatMessage("03-007",
                        Drupal.t("Cap.3: [Rind.06]: [Col.3+5] / [Col.1] >= 100: @col35/@col1=@result", { '@col35': (Number(values.CAP3_R06_C03) + Number(values.CAP3_R06_C05)), '@col1': Number(values.CAP3_R06_C01), '@result': (Number(values.CAP3_R06_C03) + Number(values.CAP3_R06_C05)) / Number(values.CAP3_R06_C01) })
                    ),
                });
            }
        }

        // Validarea 69, 71
        let rinduri = ["R04", "R05", "R06"];

        rinduri.forEach(rind => {
            let col2 = Number(values[`CAP3_${rind}_C02`] || 0);
            let col3 = Number(values[`CAP3_${rind}_C03`] || 0);
            let col4 = Number(values[`CAP3_${rind}_C04`] || 0);
            let col5 = Number(values[`CAP3_${rind}_C05`] || 0);

            // Validarea 68
            if ((col3 !== 0 && col2 === 0) || (col2 !== 0 && col3 === 0)) {
                webform.errors.push({
                    'fieldName': `CAP3_${rind}_C02`,
                    'weight': 68,
                    'msg': concatMessage("03-008",
                        Drupal.t("Cap.3: Dacă [Col.3] != 0, atunci [Col.2] != 0 (și invers)")
                    ),
                });
            }

            // Validarea 70
            if ((col5 !== 0 && col4 === 0) || (col4 !== 0 && col5 === 0)) {
                webform.errors.push({
                    'fieldName': `CAP3_${rind}_C04`,
                    'weight': 70,
                    'msg': concatMessage("03-010",
                        Drupal.t("Cap.3: Dacă [Col.5] != 0, atunci [Col.4] != 0 (și invers)")
                    ),
                });
            }
        });

        let rinduri1 = ["R01", "R02", "R03", "R04", "R05", "R06"];

        rinduri1.forEach(rind => {
            let col1 = Number(values[`CAP3_${rind}_C01`] || 0);
            let col2 = Number(values[`CAP3_${rind}_C02`] || 0);
            let col3 = Number(values[`CAP3_${rind}_C03`] || 0);
            let col4 = Number(values[`CAP3_${rind}_C04`] || 0);
            let col5 = Number(values[`CAP3_${rind}_C05`] || 0);
            let col6 = Number(values[`CAP3_${rind}_C06`] || 0);

            let denominator = (col3 + col5) * 8760;

            if (denominator > 0) {
                let ratio = col6 / denominator;

                if (ratio < 0 || ratio > 1) {
                    webform.errors.push({
                        'fieldName': `CAP3_${rind}_C06`,
                        'weight': 72,
                        'msg': concatMessage("03-012",
                            Drupal.t("Cap.3: 0 <= [Col.6] / ([Col.3+5]*8760) <= 1 (pe toate rinduri): @result nu este in intervalul 0-1", { '@result': ratio })
                        ),
                    });
                }
            }
            if (col1 == 0 && (col2 != 0 || col3 != 0 || col4 != 0 || col5 != 0 || col6 != 0)) {
                webform.errors.push({
                    'fieldName': `CAP3_${rind}_C01`,
                    'weight': 72,
                    'msg': concatMessage("03-009",
                        Drupal.t("Cap.3: Dacă [Col.2 sau Col.3 sau Col.4 sau Col.5 sau Col.6] != 0,atunci [Col.1] != 0")
                    ),
                });
            }
        });
        //23-H Anexa1
        if (cuiio23h.includes(toFloat(values.CUIIO))) {
            jQuery("#H23_CAP1_R1_C00").val(13);
            var result04_35_54 = toFloat(toFloat(values.H23_CAP1_R04_C01) + toFloat(values.H23_CAP1_R35_C01) + toFloat(values.H23_CAP1_R36_C01) + toFloat(values.H23_CAP1_R41_C01) +
                toFloat(values.H23_CAP1_R42_C01) + toFloat(values.H23_CAP1_R43_C01) + toFloat(values.H23_CAP1_R44_C01) + toFloat(values.H23_CAP1_R45_C01) +
                toFloat(values.H23_CAP1_R46_C01) + toFloat(values.H23_CAP1_R47_C01) + toFloat(values.H23_CAP1_R48_C01) + toFloat(values.H23_CAP1_R49_C01) +
                toFloat(values.H23_CAP1_R50_C01) + toFloat(values.H23_CAP1_R51_C01) + toFloat(values.H23_CAP1_R52_C01) + toFloat(values.H23_CAP1_R53_C01) +
                toFloat(values.H23_CAP1_R54_C01)).toFixed(0);
            if (toFloat(values.H23_CAP1_R03_C01) != result04_35_54) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R03_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-003. Anexa 1 Cap.1: [Rînd.03] = [Rînd.04+35+36+41+...+54]: @rind3 = @result', { '@rind3': values.H23_CAP1_R03_C01, '@result': result04_35_54 })
                });
            }
            var result37_39_40 = toFloat(toFloat(values.H23_CAP1_R37_C01) + toFloat(values.H23_CAP1_R39_C01) + toFloat(values.H23_CAP1_R40_C01)).toFixed(0);
            if (toFloat(values.H23_CAP1_R36_C01) < result37_39_40) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R36_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-005. Anexa 1 Cap.1: [Rînd.36] >= [Rînd.37+39+40]: @rind36 >= @result', { '@rind36': values.H23_CAP1_R36_C01, '@result': result37_39_40 })
                });
            }
            if (toFloat(values.H23_CAP1_R38_C01) > toFloat(values.H23_CAP1_R37_C01)) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R38_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-006. Anexa 1 Cap.1: [Rînd.38] <= [Rînd.37]: @rind38 < @rind37', { '@rind38': values.H23_CAP1_R38_C01, '@rind37': values.H23_CAP1_R37_C01 })
                });
            }
            var result2_53 = toFloat(toFloat(values.H23_CAP1_R02_C01) + toFloat(values.H23_CAP1_R53_C01)).toFixed(0);
            if (result2_53 < tab1c13_7000) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R02_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-007. Anexa 1 Cap.1: [Rînd.02+53] >= 1-BE, Cap.1: [Rînd.7000, Col.13]: @result2_53 >= @tab1c13_7000', { '@result2_53': result2_53, '@tab1c13_7000': tab1c13_7000 })
                });
            }
            var result44_45 = toFloat(toFloat(values.H23_CAP1_R44_C01) + toFloat(values.H23_CAP1_R45_C01)).toFixed(0);
            if (result44_45 != tab1c11_7000) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R44_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-008. Anexa 1 Cap.1: [Rînd.44+45] = 1-BE, Cap.1: [Rînd.7000, Col.11]: @result44_45 >= @tab1c11_7000', { '@result44_45': result44_45, '@tab1c11_7000': tab1c11_7000 })
                });
            }
            if (toFloat(values.H23_CAP2_R02_C02) != toFloat(values.H23_CAP1_R45_C01)) {
                webform.errors.push({
                    'fieldName': 'H23_CAP2_R02_C02',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-003. Anexa 1 Cap.2: [Rînd.02, Col.2] = Cap.1: [Rînd.45, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R02_C02, '@res2': values.H23_CAP1_R45_C01 })
                });
            }
            if (toFloat(values.H23_CAP2_R03_C02) != toFloat(values.H23_CAP1_R44_C01)) {
                webform.errors.push({
                    'fieldName': 'H23_CAP2_R03_C02',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-004. Anexa 1 Cap.2: [Rînd.03, Col.2] = Cap.1: [Rînd.44, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R03_C02, '@res2': values.H23_CAP1_R44_C01 })
                });
            }
            var result3_53_54 = toFloat(toFloat(values.H23_CAP1_R03_C01) - toFloat(values.H23_CAP1_R53_C01) - toFloat(values.H23_CAP1_R54_C01)).toFixed(0);
            if (toFloat(values.H23_CAP2_R01_C01) != result3_53_54) {
                webform.warnings.push({
                    'fieldName': 'H23_CAP2_R01_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-005. Anexa 1 Cap.2: [Rînd.01, Col.1] = Cap.1: [Rînd.03-Rînd.53-Rînd.54, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R03_C02, '@res2': result3_53_54 })
                });
            }
            if (toFloat(values.H23_CAP2_R01_C03) != toFloat(values.H23_CAP1_R52_C01)) {
                webform.errors.push({
                    'fieldName': 'H23_CAP2_R01_C03',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-006. Anexa 1 Cap.2: [Rînd.01, Col.3] = Cap.1: [Rînd.52, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C03, '@res2': values.H23_CAP1_R52_C01 })
                });
            }
            if (toFloat(values.H23_CAP2_R01_C04) != toFloat(values.H23_CAP1_R53_C01)) {
                webform.errors.push({
                    'fieldName': 'H23_CAP2_R01_C04',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-006. Anexa 1 Cap.2: [Rînd.01, Col.4] = Cap.1: [Rînd.53, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C04, '@res2': values.H23_CAP1_R53_C01 })
                });
            }
            var cuatmCap2col1 = 0;
            var cuatmCap2col2 = 0;
            var cuatmCap2col3 = 0;
            var cuatmCap2col4 = 0;
            for (var i = 0; i < values.H23_CAP2_R_CI.length; i++) {
                cuatmCap2col1 += Number(values.H23_CAP2_R_C01[i]);
                cuatmCap2col2 += Number(values.H23_CAP2_R_C02[i]);
                cuatmCap2col3 += Number(values.H23_CAP2_R_C03[i]);
                cuatmCap2col4 += Number(values.H23_CAP2_R_C04[i]);
            }
            if (toFloat(values.H23_CAP2_R01_C01) != cuatmCap2col1) {
                webform.errors.push({
                    'fieldName': 'CAP2_R01_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-008. Anexa 1 Cap.2: [Rînd.01, Col.1] = Suma [Rînd.CUATM, Col.1]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C01, '@res2': cuatmCap2col1 })
                });
            }
            if (toFloat(values.H23_CAP2_R01_C02) != cuatmCap2col2) {
                webform.errors.push({
                    'fieldName': 'CAP2_R01_C02',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-008. Anexa 1 Cap.2: [Rînd.01, Col.2] = Suma [Rînd.CUATM, Col.2]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C02, '@res2': cuatmCap2col2 })
                });
            }
            if (toFloat(values.H23_CAP2_R01_C03) != cuatmCap2col3) {
                webform.errors.push({
                    'fieldName': 'CAP2_R01_C03',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-008. Anexa 1 Cap.2: [Rînd.01, Col.3] = Suma [Rînd.CUATM, Col.3]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C03, '@res2': cuatmCap2col3 })
                });
            }
            if (toFloat(values.H23_CAP2_R01_C04) != cuatmCap2col4) {
                webform.errors.push({
                    'fieldName': 'CAP2_R01_C04',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('02-008. Anexa 1 Cap.2: [Rînd.01, Col.4] = Suma [Rînd.CUATM, Col.4]: @res1 = @res2', { '@res1': values.H23_CAP2_R01_C04, '@res2': cuatmCap2col4 })
                });
            }
            if (toFloat(values.H23_CAP1_R54_C01) != tab1c12_7000) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R54_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-010. Anexa 1 Cap.1: [Rînd.54] = 1-BE, Cap.1: [Rînd.7000, Col.12]: @result44_45 = @tab1c12_7000', { '@result44_45': values.H23_CAP1_R54_C01, '@tab1c12_7000': tab1c12_7000 })
                });
            }
            if (toFloat(values.H23_CAP1_R0101_C01) != tab1c4_7000) {
                webform.errors.push({
                    'fieldName': 'H23_CAP1_R0101_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-011. Anexa 1 Cap.1: [Rînd.01.1] = 1-BE, Cap.1: [Rînd.7000, Col.4]: @result44_45 = @tab1c4_7000', { '@result44_45': values.H23_CAP1_R0101_C01, '@tab1c4_7000': tab1c4_7000 })
                });
            }
            if (toFloat(values.H23_CAP1_R0102_C01) + toFloat(values.H23_CAP1_R1_C01_1) != tab1c3_7000) {
                webform.warnings.push({
                    'fieldName': 'H23_CAP1_R0102_C01',
                    'index': 0,
                    'weight': 1,
                    'options': {
                        'hide_title': true
                    },
                    'msg': Drupal.t('01-012. Anexa 1 Cap.1: [Rînd.1.2, Col.1] + Cap.1 [Rînd.13, Col.1] = 1-BE, Cap.1: [Rind.7000, Col.3]: @res1 = @res2', { '@res1': toFloat(values.H23_CAP1_R0102_C01) + toFloat(values.H23_CAP1_R1_C01_1), '@res2': tab1c3_7000 })
                });
            }
        }

        //6-IT============================================================================
        var an2SumRind2 = values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01;
        var an2SumRind3 = values.IT6_CAP1_R0301_C01 + values.IT6_CAP1_R0302_C01 + values.IT6_CAP1_R0303_C01 + values.IT6_CAP1_R0304_C01 + values.IT6_CAP1_R0305_C01 +
            values.IT6_CAP1_R0306_C01 + values.IT6_CAP1_R0307_C01 + values.IT6_CAP1_R0308_C01 + values.IT6_CAP1_R0309_C01 + values.IT6_CAP1_R0310_C01;
        if (an2SumRind2 > 0 && an2SumRind3 == 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R0202_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-001",
                    Drupal.t("Anexa 2 Dacă Cap.1: [Rînd.2.3, 2.4] este bifat, atunci [Rînd.3.1,sau …, sau  3.10] > 0:  @res1 specificati cantitatea, @res2 > 0", { '@res1': an2SumRind2, '@res2': an2SumRind3 })
                ),
            });
        }
        if (values.IT6_CAP1_R05_C01 > values.IT6_CAP1_R04_C01) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R05_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-002",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.5]  <= Cap.1: [Rînd.4] :  @res1 <= @res2", { '@res1': values.IT6_CAP1_R05_C01, '@res2': values.IT6_CAP1_R04_C01 })
                ),
            });
        }
        if (values.IT6_CAP1_R05_C01 == 0 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R05_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-003",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.5] > 0, dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 > 0 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP1_R05_C01 })
                ),
            });
        }
        if (values.IT6_CAP1_R07_C01 != values.IT6_CAP1_R04_C01 && values.IT6_CAP1_R06_C01 == 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R07_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-004",
                    Drupal.t("Anexa 2 Cap.1  [Rînd.7] = Cap.1: [Rînd.4], dacă Cap.1: [Rînd. 6] =0:  @res1 = @res2", { '@res1': values.IT6_CAP1_R07_C01, '@res2': values.IT6_CAP1_R04_C01 })
                ),
            });
        }
        if (values.IT6_CAP1_R08_C01 > values.IT6_CAP1_R05_C01) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R08_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-005",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.8]  <= Cap.1: [Rînd.5] :  @res1 <= @res2", { '@res1': values.IT6_CAP1_R08_C01, '@res2': values.IT6_CAP1_R05_C01 })
                ),
            });
        }
        if (values.IT6_CAP1_R08_C01 == 0 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R08_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-006",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.8] > 0, dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 > 0 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP1_R08_C01 })
                ),
            });
        }
        if (values.IT6_CAP1_R09_C01 == 0 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R09_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-007",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.9] > 0, dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 > 0 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP1_R09_C01 })
                ),
            });
        }
        if (((values.IT6_CAP1_R10_C01 == 0 || values.IT6_CAP1_R11_C01 == 0 || values.IT6_CAP1_R12_C01 == 0) && values.CUIIO == 2742837) ||
            (values.CUIIO != 2742837 && (values.IT6_CAP1_R10_C01 != 0 || values.IT6_CAP1_R11_C01 != 0 || values.IT6_CAP1_R12_C01 != 0))) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R10_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-008",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.10,11,12], se completeazăde către ÎS 'Moldelectrica'")
                ),
            });
        }
        if (values.IT6_CAP2_R02_C01 > values.IT6_CAP2_R01_C01 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R02_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-001",
                    Drupal.t("Anexa 2 Cap.2 [Rind.2] <= [Rind.1],dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 <= @res2 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R02_C01, '@res2': values.IT6_CAP2_R01_C01 })
                ),
            });
        }
        if (values.IT6_CAP2_R03_C01 < (toFloat(values.IT6_CAP2_R04_C01) + toFloat(values.IT6_CAP2_R05_C01))) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R03_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-002",
                    Drupal.t("Anexa 2 Cap.2 [Rind.3] >= [Rind.4+5]: @res1 >= @res2", { '@res1': values.IT6_CAP2_R03_C01, '@res2': (values.IT6_CAP2_R04_C01 + values.IT6_CAP2_R05_C01) })
                ),
            });
        }
        if (values.IT6_CAP2_R06_C01 > (values.IT6_CAP2_R01_C01 - values.IT6_CAP2_R03_C01)) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R06_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-003",
                    Drupal.t("Anexa 2 Cap.2 [Rind.6] <= [Rind.1-3]: @res1 <= @res2", { '@res1': values.IT6_CAP2_R06_C01, '@res2': (values.IT6_CAP2_R01_C01 - values.IT6_CAP2_R03_C01) })
                ),
            });
        }
        //var a = values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01;
        if (toFloat(values.IT6_CAP2_R07_C01) > toFloat(values.IT6_CAP2_R06_C01) && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R07_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-004",
                    Drupal.t("Anexa 2 Cap.2 [Rind.7] <= [Rind.6],dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 <= @res2 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R07_C01, '@res2': values.IT6_CAP2_R06_C01 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R12_C01) > toFloat(values.IT6_CAP2_R11_C01) && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R12_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-005",
                    Drupal.t("Anexa 2 Cap.2 [Rind.12] <= [Rind.11],dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 <= @res2 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R12_C01, '@res2': values.IT6_CAP2_R11_C01 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R01_C01) != tab11c1_7010 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-006",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.1] = 1-BE, Cap.1.1: [Rînd.7010] (Dacă Cap.1: [Rînd.2.3 sau  2.4] > 0):  @res1 = @res2 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R01_C01, '@res2': tab11c1_7010 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R11_C01) > (tab1c10_8000 + tab1c11_8000) && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-007",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.11] <= 1-BE, Cap.1: SUMA[Rînd.8000,col 10+11] (Dacă Cap.1: [Rînd.2.3 sau  2.4] > 0):  @res1 <= @res2 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R11_C01, '@res2': (tab1c10_8000 + tab1c11_8000) })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R02_C01) != tab11c1_7001) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R02_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-008",
                    Drupal.t("Anexa 2 Cap.2 [Rind.2] = 1-BE, Cap.1.1: [Rind.7001]:  @res1 = @res2", { '@res1': values.IT6_CAP2_R02_C01, '@res2': tab11c1_7001 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R12_C01) > tab11c1_8001) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R12_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-009",
                    Drupal.t("Anexa 2 Cap.2 [Rind.12] <= 1-BE, Cap.1.1: [Rind.8001]:  @res1 <= @res2", { '@res1': values.IT6_CAP2_R12_C01, '@res2': tab11c1_8001 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R01_C01) > toFloat(values.IT6_CAP1_R04_C01) * 8.760) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-010",
                    Drupal.t("Anexa 2 Cap.2 [Rind.1] <= Cap.1: [Rind.4] * 8.760:  @res1 <= @res2", { '@res1': values.IT6_CAP2_R01_C01, '@res2': values.IT6_CAP1_R04_C01 * 8.760 })
                ),
            });
        }
        if (toFloat(values.IT6_CAP2_R02_C01) > toFloat(values.IT6_CAP1_R05_C01) * 8.760) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R02_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-011",
                    Drupal.t("Anexa 2 Cap.2 [Rind.2] <= Cap.1: [Rind.5] * 8.760:  @res1 <= @res2", { '@res1': values.IT6_CAP2_R02_C01, '@res2': values.IT6_CAP1_R05_C01 * 8.760 })
                ),
            });
        }
        if (values.IT6_CAP2_R02_C01 == 0 && values.IT6_CAP1_R05_C01 > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R02_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-012",
                    Drupal.t("Anexa 2 Cap.2[Rînd.2] > 0 (Dacă Cap.1: [Rînd.5] > 0):  @res1 > 0, daca @res2 > 0", { '@res1': values.IT6_CAP2_R02_C01, '@res2': values.IT6_CAP1_R05_C01 })
                ),
            });
        }
        if (values.IT6_CAP2_R07_C01 == 0 && values.IT6_CAP1_R05_C01 > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R07_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-013",
                    Drupal.t("Anexa 2 Cap.2[Rînd.7] > 0 (Dacă Cap.1: [Rînd.5] > 0):  @res1 > 0, daca @res2 > 0", { '@res1': values.IT6_CAP2_R07_C01, '@res2': values.IT6_CAP1_R05_C01 })
                ),
            });
        }
        if (values.IT6_CAP2_R11_C01 == 0 && (values.IT6_CAP1_R0203_C01 + values.IT6_CAP1_R0204_C01) > 0) {
            webform.warnings.push({
                'fieldName': 'IT6_CAP2_R11_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-014",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.11] > 0, dacă Cap.1: [ Rînd.2.3 sau 2.4]:  @res1 > 0 si [ Rînd.2.3 sau 2.4] este bifat", { '@res1': values.IT6_CAP2_R11_C01 })
                ),
            });
        }
        if (values.IT6_CAP2_R01_C01 != tab11c1_7030 && values.IT6_CAP1_R0201_C01 > 0) {
            webform.warnings.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-015",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.1] = 1-BE, Cap.1.1: [Rînd.7030] (Dacă Cap.1: [Rînd.2.1] > 0):  @res1 = @res2", { '@res1': values.IT6_CAP2_R01_C01, '@res2': tab11c1_7030 })
                ),
            });
        }
        if (values.IT6_CAP2_R01_C01 != tab11c1_7020 && values.IT6_CAP1_R0202_C01 > 0) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-016",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.1] = 1-BE, Cap.1.1: [Rînd.7020] (Dacă Cap.1: [Rînd.2.2] > 0):  @res1 = @res2", { '@res1': values.IT6_CAP2_R01_C01, '@res2': tab11c1_7020 })
                ),
            });
        }
        /*var an2SumRind9 = 0;
        ["R0901", "R0902", "R0903","R0904","R0905","R0906","R0907","R0908","R0909","R0910","R0911","R0912","R0913","R0914","R0915"].forEach(rind => {
          if(Number(values[`IT6_CAP2_${rind}_C00`]) >= 0){
            an2SumRind9 += Number(values[`IT6_CAP2_${rind}_C01`]);
          }
        });*/
        /*if(values.IT6_CAP2_R09_C01 != values.IT6_CAP2_R0901_C01){
          webform.errors.push({
            'fieldName' : 'IT6_CAP2_R09_C01',
            'index' : 0,
            'weight': 1,
            'msg': concatMessage("02-017",
            Drupal.t("Anexa 2 Cap.2 [Rind.09] = Cap.2 [Rind.999]:  @res1 = @res2", {'@res1': values.IT6_CAP2_R09_C01, '@res2': values.IT6_CAP2_R0901_C01})
          ),
        });
        }*/
        /*var an2SumRind10 = 0;
        ["R1001", "R1002", "R1003","R1004","R1005","R1006","R1007","R1008","R1009","R1010","R1011","R1012","R1013","R1014","R1015"].forEach(rind => {
          if(Number(values[`IT6_CAP2_${rind}_C00`]) >= 0){
            an2SumRind10 += Number(values[`IT6_CAP2_${rind}_C01`]);
          }
        });*/
        /*if(values.IT6_CAP2_R10_C01 != values.IT6_CAP2_R1001_C01){
          webform.errors.push({
            'fieldName' : 'IT6_CAP2_R10_C01',
            'index' : 0,
            'weight': 1,
            'msg': concatMessage("02-018",
            Drupal.t("Anexa 2 Cap.2 [Rind.10] = Cap.2 [Rind.101]:  @res1 = @res2", {'@res1': values.IT6_CAP2_R10_C01, '@res2': values.IT6_CAP2_R1001_C01})
          ),
        });
        }*/
        var it6cap2_r6_9 = toFloat(values.IT6_CAP2_R06_C01) + toFloat(values.IT6_CAP2_R08_C01) + toFloat(values.IT6_CAP2_R09_C01);
        if (values.IT6_CAP2_R10_C01 > it6cap2_r6_9) {
            webform.warnings.push({
                'fieldName': 'IT6_CAP2_R10_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-019",
                    Drupal.t("Anexa 2 Cap.2 [Rind.10] <= Suma [Rind.6,8,9]:  @res1 <= @res2", { '@res1': values.IT6_CAP2_R10_C01, '@res2': it6cap2_r6_9 })
                ),
            });
        }
        if (values.IT6_CAP2_R09_C01 > tab1c3_7000) {
            webform.warnings.push({
                'fieldName': 'IT6_CAP2_R09_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-020",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.09] <= 1-BE, Cap.1: [Rînd.7000, Col.3]:  @res1 <= @res2", { '@res1': values.IT6_CAP2_R09_C01, '@res2': tab1c3_7000 })
                ),
            });
        }

        if (values.IT6_CAP2_R10_C01 > (tab1c10_7000)) {
            webform.errors.push({
                'fieldName': 'IT6_CAP2_R01_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-021",
                    Drupal.t("Anexa 2 Cap.2 [Rînd.10] <= 1-BE, Cap.1: SUMA[Rînd.7000,col 10]):  @res1 <= @res2", { '@res1': values.IT6_CAP2_R10_C01, '@res2': tab1c10_7000 })
                ),
            });
        }

        var IT6Cap1Rind12 = values.IT6_CAP1_R12_C01.substring(6);
        if (IT6Cap1Rind12 != jQuery('#YEAR').val() && values.CUIIO == 2742837) {
            webform.errors.push({
                'fieldName': 'IT6_CAP1_R12_C01',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("02-022",
                    Drupal.t("Anexa 2 Cap.1 [Rînd.12] trebuie sa fie selectat doar anul de raportare")
                ),
            });
        }
        //PE=========================================================================
        var an3SumCol3 = 0;
        ["R01", "R02", "R03", "R04", "R05", "R06"].forEach(rind => {
            an3SumCol3 += Number(values[`PE_CAP1_${rind}_C03`]);
            if (Number(values[`PE_CAP1_${rind}_C03`]) > (Number(values[`PE_CAP1_${rind}_C02`]) * 8.760)) {
                webform.errors.push({
                    'fieldName': `PE_CAP1_${rind}_C03`,
                    'index': 0,
                    'weight': 1,
                    'msg': concatMessage("01-001",
                        Drupal.t("Anexa 3 Rind.@rind [Col.3] <= [Col.2] * 8.760:  @col3 <= @col2", { '@rind': rind, '@col3': Number(values[`PE_CAP1_${rind}_C03`]), '@col2': (Number(values[`PE_CAP1_${rind}_C02`]) * 8.760) })
                    ),
                });
            }

            if ((Number(values[`PE_CAP1_${rind}_C02`]) / Number(values[`PE_CAP1_${rind}_C01`])).toFixed(1) >= 500) {
                webform.errors.push({
                    'fieldName': 'PE_CAP1_R00_C01',
                    'index': 0,
                    'weight': 1,
                    'msg': concatMessage("01-004",
                        Drupal.t("Anexa 3 [Rînd.*, Col.2] / [Rînd.*, Col.1] < 500:  @res1 < 500, Dacă col.2 conține date corecte, este necesar de completat Anexa 2 în loc de Anexa 3", { '@rind': rind, '@res1': (Number(values[`PE_CAP1_${rind}_C02`]) / Number(values[`PE_CAP1_${rind}_C01`])).toFixed(1) })
                    ),
                });
            }
            if (Number(values[`PE_CAP1_${rind}_C03`]) > 0 && (Number(values[`PE_CAP1_${rind}_C01`]) == 0 || Number(values[`PE_CAP1_${rind}_C02`]) == 0)) {
                webform.errors.push({
                    'fieldName': `PE_CAP1_${rind}_C03`,
                    'index': 0,
                    'weight': 1,
                    'msg': concatMessage("01-006",
                        Drupal.t("Anexa 3 Dacă [Col.3] > 0, atunci  [Col.1 si Col.2]  > 0")
                    ),
                });
            }
        });

        if ((toFloat(an3SumCol3) + toFloat(values.IT6_CAP2_R01_C01) != (tab11c1_7010 + tab11c1_7020 + tab11c1_7030 + tab11c1_7040 + tab11c1_7050)) &&
            ((tab1c2_7000 > 0 && cuiio6ITPE.includes(Number(values.CUIIO))) ||
                (tab1c2_7000 > 0 && !cuiio6IT.includes(Number(values.CUIIO))))) {
            webform.warnings.push({
                'fieldName': 'PE_CAP1_R00_C03',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-002",
                    Drupal.t("Anexa 3 Suma [Rînd.*, Col.3] + Anexa 2 Cap.2 [Rind.1] = 1-BE, Cap.1.1: [Rînd.7020+7030+7040+7050, Col.1]:  @res1 <= @res2", { '@res1': an3SumCol3 + toFloat(values.IT6_CAP2_R01_C01), '@res2': (tab11c1_7010 + tab11c1_7020 + tab11c1_7030 + tab11c1_7040 + tab11c1_7050) })
                ),
            });
        }

        if (values.PE_CAP1_R04_C03 != tab11c1_7030 && values.PE_CAP1_R04_C03 > 0) {
            webform.errors.push({
                'fieldName': 'PE_CAP1_R04_C03',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-007",
                    Drupal.t("Anexa 3 Cap.1 [Rînd.4, col3] = 1-BE, Cap.1.1: [Rînd.7030, Col.1]:  @res1 <= @res2", { '@res1': values.PE_CAP1_R04_C03, '@res2': tab11c1_7030 })
                ),
            });
        }
        if (values.PE_CAP1_R05_C03 != tab11c1_7040 && values.PE_CAP1_R05_C03 > 0) {
            webform.warnings.push({
                'fieldName': 'PE_CAP1_R05_C03',
                'index': 0,
                'weight': 1,
                'msg': concatMessage("01-008",
                    Drupal.t("Anexa 3 Cap.1 [Rînd.5, col3] = 1-BE, Cap.1.1: [Rînd.7040, Col.1]:  @res1 <= @res2", { '@res1': values.PE_CAP1_R05_C03, '@res2': tab11c1_7040 })
                ),
            });
        }

        webform.validatorsStatus["be1"] = 1;
        validateWebform();
    }
})(jQuery);


webform.beforeLoad.be1 = function () {

    if (!Drupal.settings.mywebform.preview) {
        jQuery('#IT6_CAP1_R12_C02').prop('type', 'time');
        var cuiio = jQuery("#CUIIO").val();
        var values = Drupal.settings.mywebform.values;
        if (cuiio23h.includes(Number(cuiio))) {
            jQuery('#ANEXA1_23H_HEADER').show();
            jQuery('#ANEXA1_23H_CAP1').show();
            jQuery('#ANEXA1_23H_CAP2').show();
            jQuery('#ANEXA1_23H_CAP1_R5').show();
            //jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();

        }
        else {
            jQuery('#ANEXA1_23H_HEADER').hide();
            jQuery('#ANEXA1_23H_CAP1').hide();
            jQuery('#ANEXA1_23H_CAP2').hide();
            jQuery('#ANEXA1_23H_CAP1_R5').hide();
        }
        for (var i = 0; i < values.CAP1_R_CI.length; i++) {
            if (Number(values.CAP1_A[i]) == 7000 && values.CAP1_R_C02[i] > 0 && cuiio6ITPE.includes(Number(cuiio))) {
                jQuery('#ANEXA2_6IT_HEADER').show();
                jQuery('#ANEXA2_6IT_CAP1').show();
                jQuery('#ANEXA2_6IT_CAP2').show();
                jQuery('#ANEXA3_PE_HEADER').show();
                jQuery('#ANEXA3_PE').show();
            }
            else if (Number(values.CAP1_A[i]) == 7000 && (values.CAP1_R_C02[i] > 0 && cuiio6IT.includes(Number(cuiio)) || Number(cuiio) == 2742837)) {
                jQuery('#ANEXA2_6IT_HEADER').show();
                jQuery('#ANEXA2_6IT_CAP1').show();
                jQuery('#ANEXA2_6IT_CAP2').show();
                jQuery('#ANEXA3_PE_HEADER').hide();
                jQuery('#ANEXA3_PE').hide();
                //jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();

            }
            else if (Number(values.CAP1_A[i]) == 7000 && values.CAP1_R_C02[i] > 0 && !cuiio6IT.includes(Number(cuiio))) {
                jQuery('#ANEXA2_6IT_HEADER').hide();
                jQuery('#ANEXA2_6IT_CAP1').hide();
                jQuery('#ANEXA2_6IT_CAP2').hide();
                jQuery('#ANEXA3_PE_HEADER').show();
                jQuery('#ANEXA3_PE').show();
            }
            else if (Number(values.CAP1_A[i]) == 7000 && values.CAP1_R_C02[i] <= 0) {
                jQuery('#ANEXA2_6IT_HEADER').hide();
                jQuery('#ANEXA2_6IT_CAP1').hide();
                jQuery('#ANEXA2_6IT_CAP2').hide();
                jQuery('#ANEXA3_PE_HEADER').hide();
                jQuery('#ANEXA3_PE').hide();
            }
        }
    }
};

webform.afterLoad.be1 = function () {
    if (!Drupal.settings.mywebform.preview) {
        jQuery("td").removeClass("min-width");
        var arraySicpe = [""];

        jQuery.each(arraySicpe, function (key, value) {
            set_sicpe_to_select(value, null, null);
            set_options_html(value);
        });
    }
    var values = Drupal.settings.mywebform.values;
    for (var i = 0; i < values.CAP1_R_CI.length; i++) {
        if (Number(values.CAP1_A[i]) == 7000) {
            jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C06-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C06-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C07-' + values.CAP1_R_CI[i]).prop("disabled", false).change();
            jQuery('#CAP1_R_C07-' + values.CAP1_R_CI[i]).css("background-color", "").change();
            jQuery('#CAP1_R_C08-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C08-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C12-' + values.CAP1_R_CI[i]).prop("disabled", false).change();
            jQuery('#CAP1_R_C12-' + values.CAP1_R_CI[i]).css("background-color", "").change();
            jQuery('#CAP1_R_C14-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C14-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
        }
        if (Number(values.CAP1_A[i]) == 4692) {
            jQuery('#CAP1_R_C09-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C09-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
        }
        if (Number(values.CAP1_A[i]) == 8000) {
            jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C01-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C06-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C06-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C07-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C07-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C08-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C08-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C12-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C12-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
            jQuery('#CAP1_R_C14-' + values.CAP1_R_CI[i]).prop("disabled", true).change();
            jQuery('#CAP1_R_C14-' + values.CAP1_R_CI[i]).css("background-color", "#e0e0e0").change();
        }
    }
    for (var i = 0; i < values.CAP2_R_CI.length; i++) {
        var changedRow = 0;
        for (var j = 0; j < values.CAP2_R_CI.length; j++) {
            if (i != j) {
                if (i < j && changedRow == 0) {
                    jQuery('#CAP2_R_C02-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C02-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                    jQuery('#CAP2_R_C05-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C05-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                }
                if (i > j && Number(values.CAP2_A[i]) == Number(values.CAP2_A[j])) {
                    jQuery('#CAP2_R_C01-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C01-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();

                    jQuery('#CAP2_R_C02-' + values.CAP2_R_CI[i]).prop("disabled", false).change();
                    jQuery('#CAP2_R_C02-' + values.CAP2_R_CI[i]).css("background-color", "").change();

                    jQuery('#CAP2_R_C04-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C04-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();

                    jQuery('#CAP2_R_C05-' + values.CAP2_R_CI[i]).prop("disabled", false).change();
                    jQuery('#CAP2_R_C05-' + values.CAP2_R_CI[i]).css("background-color", "").change();

                    jQuery('#CAP2_R_C07-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C07-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                    jQuery('#CAP2_R_C08-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C08-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                    jQuery('#CAP2_R_C09-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C09-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                    jQuery('#CAP2_R_C10-' + values.CAP2_R_CI[i]).prop("disabled", true).change();
                    jQuery('#CAP2_R_C10-' + values.CAP2_R_CI[i]).css("background-color", "#e0e0e0").change();
                    changedRow = 1;
                }
            }
        }
    }
};

function concatMessage(errorCode, msg) {
    var titleParts = [];

    if (errorCode) {
        titleParts.push(getErrorMessage(errorCode));
    }

    if (titleParts.length) {
        msg = titleParts.join(', ') + '. ' + msg;
    }

    return msg;
}

function getErrorMessage(errorCode) {
    return Drupal.t('@error_code', { '@error_code': errorCode });
}

function set_options_html(selector) {
    var sicpeValues = Drupal.settings.mywebform.values[selector];
    if (!jQuery.isEmptyObject(sicpeValues)) {
        jQuery.each(sicpeValues, function (key, value) {
            set_sicpe_to_select(selector, value, key + 1);
        });
    }
}
function set_sicpe_to_select(selector, valueSICPE, keySICPE) {
    var obj =
        keySICPE !== null
            ? jQuery("#" + selector + "-" + keySICPE)
            : jQuery("#" + selector);
    obj.empty();
}

function get_current_year() {
    var date = new Date();
    return date.getFullYear();
}

function changeIdCombustibil(elem) {
    var elemnt = jQuery(elem).closest("tr").find("input.tip-combustibil");
    var elemnt_comb = jQuery(elem).closest("tr").find("input.select-combustibul");
    var unMasura = jQuery(elem).closest("tr").find("input.unit-mas");
    var tec = jQuery(elem).closest("tr").find("input.echivalentii");
    var col1 = jQuery(elem).closest("tr").find("input.col1");
    var col2 = jQuery(elem).closest("tr").find("select.col2");
    var col3 = jQuery(elem).closest("tr").find("input.col3");
    var col4 = jQuery(elem).closest("tr").find("input.col4");
    var col5 = jQuery(elem).closest("tr").find("select.col5");
    var col6 = jQuery(elem).closest("tr").find("input.col6");
    var col7 = jQuery(elem).closest("tr").find("input.col7");
    var col8 = jQuery(elem).closest("tr").find("input.col8");
    var col9 = jQuery(elem).closest("tr").find("input.col9");
    var col10 = jQuery(elem).closest("tr").find("input.col10");
    var col12 = jQuery(elem).closest("tr").find("input.col12");
    var col14 = jQuery(elem).closest("tr").find("input.col14");
    var a = elem.id;
    var b = elemnt.id;
    var echiv = jQuery(elem).closest("tr").find("input.echiv-med");

    if (jQuery(elem).val() == elemnt.val()) return;

    //elemnt.val(jQuery(elem).val()).change();

    if (typeof sicpe != "undefined") {
        for (var i in sicpe) {
            if (jQuery(elem).val() == sicpe[i].code) {
                elemnt.val(sicpe[i].name).change();
                unMasura.val(sicpe[i].unitatea_mas).change();
                tec.val(sicpe[i].TEC).change();

                if (!isNaN(sicpe[i].TEC)) {
                    echiv.val(sicpe[i].TEC).change();
                } else {
                    echiv.val('').change();
                }

                if (sicpe[i].code == 4692 && a.substring(0, a.indexOf('-')) == 'CAP1_A') {
                    col9.prop("disabled", true).change();
                    col9.css("background-color", "#e0e0e0").change();
                    col1.prop("disabled", false);
                    col1.css("background-color", "");
                    col6.prop("disabled", false);
                    col6.css("background-color", "");
                    col7.prop("disabled", false);
                    col7.css("background-color", "");
                    col8.prop("disabled", false);
                    col8.css("background-color", "");
                    col12.prop("disabled", false);
                    col12.css("background-color", "");
                    col14.prop("disabled", false);
                    col14.css("background-color", "");
                } else if (sicpe[i].code == 7000 && a.substring(0, a.indexOf('-')) == 'CAP1_A') {
                    col9.prop("disabled", false);
                    col9.css("background-color", "");
                    col1.prop("disabled", true);
                    col1.css("background-color", "#e0e0e0");
                    col6.prop("disabled", true);
                    col6.css("background-color", "#e0e0e0");
                    col7.prop("disabled", false);
                    col7.css("background-color", "");
                    col8.prop("disabled", true);
                    col8.css("background-color", "#e0e0e0");
                    col12.prop("disabled", false);
                    col12.css("background-color", "");
                    col14.prop("disabled", true);
                    col14.css("background-color", "#e0e0e0");
                } else if (sicpe[i].code == 8000 && a.substring(0, a.indexOf('-')) == 'CAP1_A') {
                    col9.prop("disabled", false);
                    col9.css("background-color", "");
                    col1.prop("disabled", true);
                    col1.css("background-color", "#e0e0e0");
                    col6.prop("disabled", true);
                    col6.css("background-color", "#e0e0e0");
                    col7.prop("disabled", true);
                    col7.css("background-color", "#e0e0e0");
                    col8.prop("disabled", true);
                    col8.css("background-color", "#e0e0e0");
                    col12.prop("disabled", true);
                    col12.css("background-color", "#e0e0e0");
                    col14.prop("disabled", true);
                    col14.css("background-color", "#e0e0e0");
                } else {
                    col9.prop("disabled", false);
                    col9.css("background-color", "");
                    col1.prop("disabled", false);
                    col1.css("background-color", "");
                    col6.prop("disabled", false);
                    col6.css("background-color", "");
                    col7.prop("disabled", false);
                    col7.css("background-color", "");
                    col8.prop("disabled", false);
                    col8.css("background-color", "");
                    col12.prop("disabled", false);
                    col12.css("background-color", "");
                    col14.prop("disabled", false);
                    col14.css("background-color", "");
                }
            }
        }
    }

    var fields_table1_c1 = jQuery('#tab_cap1 tbody tr td:nth-child(2)').find('select');
    var fields_table1_c2 = jQuery('#tab_cap1 tbody tr td:nth-child(3)').find('input');
    var fields_table1_c3 = jQuery('#tab_cap1 tbody tr td:nth-child(4)').find('input');
    var fields_table11_c1 = jQuery('#tab_cap11 tbody tr td:nth-child(2)').find('select');
    var fields_table11_c2 = jQuery('#tab_cap11 tbody tr td:nth-child(3)').find('input');
    var fields_table2_ca = jQuery('#tab_cap2 tbody tr td:nth-child(2)').find('select');
    var fields_table2_c1 = jQuery('#tab_cap2 tbody tr td:nth-child(5)').find('input');
    var fields_table2_c2 = jQuery('#tab_cap2 tbody tr td:nth-child(6)').find('select');
    var fields_table2_c3 = jQuery('#tab_cap2 tbody tr td:nth-child(7)').find('input');
    var fields_table2_c4 = jQuery('#tab_cap2 tbody tr td:nth-child(8)').find('input');
    var fields_table2_c5 = jQuery('#tab_cap2 tbody tr td:nth-child(9)').find('select');
    var fields_table2_c6 = jQuery('#tab_cap2 tbody tr td:nth-child(10)').find('input');
    var fields_table2_c7 = jQuery('#tab_cap2 tbody tr td:nth-child(11)').find('input');
    var fields_table2_c8 = jQuery('#tab_cap2 tbody tr td:nth-child(12)').find('input');
    var fields_table2_c9 = jQuery('#tab_cap2 tbody tr td:nth-child(13)').find('input');
    var fields_table2_c10 = jQuery('#tab_cap2 tbody tr td:nth-child(14)').find('input');
    var ElementActiv = elem.id;
    var IdElementActiv = ElementActiv.substring(7).replace("-", "");
    //var NameCombustibil = fields_table1_c1[IdElementActiv - 1].options[fields_table1_c1[IdElementActiv - 1].selectedIndex].innerHTML;
    var i = 0;
    var cautare = 0;
    if (ElementActiv.substring(0, ElementActiv.indexOf('-')) == 'CAP1_A') {
        for (i = 0; i < (fields_table1_c1.length - 1); i++) {
            if ((jQuery(elem).val() == jQuery(fields_table1_c1[i]).val()) && ((IdElementActiv - 1) != i)) {
                var val_y = jQuery(elem).val();
                var selectedIndex = fields_table1_c1[i].selectedIndex;
                var selection = fields_table1_c1[i].options[fields_table1_c1[i].selectedIndex].innerHTML;
                mywebform_alert("Exista deja  acest tip de combustibil - " + selection);
                cautare = 1;
            }

        }
    }
    if (ElementActiv.substring(0, ElementActiv.indexOf('-')) == 'CAP11_A') {
        for (i = 0; i < (fields_table11_c1.length - 1); i++) {
            if ((jQuery(elem).val() == jQuery(fields_table11_c1[i]).val()) && ((IdElementActiv - 1) != i)) {
                var val_y = jQuery(elem).val();
                var selectedIndex = fields_table11_c1[i].selectedIndex;
                var selection = fields_table11_c1[i].options[fields_table11_c1[i].selectedIndex].innerHTML;
                mywebform_alert("Exista deja  acest tip de combustibil - " + selection);
                cautare = 1;
            }
        }
    }

    if (ElementActiv.substring(0, ElementActiv.indexOf('-')) == 'CAP2_A') {

        col2.prop("disabled", true);
        col2.css("background-color", "#e0e0e0");
        col5.prop("disabled", true);
        col5.css("background-color", "#e0e0e0");
        for (i = 0; i < (fields_table2_ca.length - 1); i++) {
            if ((IdElementActiv - 1) != i && (jQuery(elem).val() == jQuery(fields_table2_ca[i]).val())) {

                col1.prop("disabled", true);
                col1.css("background-color", "#e0e0e0");
                col2.prop("disabled", false);
                col2.css("background-color", "");
                col3.prop("disabled", false);
                col3.css("background-color", "");
                col4.prop("disabled", true);
                col4.css("background-color", "#e0e0e0");
                col5.prop("disabled", false);
                col5.css("background-color", "");
                col6.prop("disabled", false);
                col6.css("background-color", "");
                col7.prop("disabled", true);
                col7.css("background-color", "#e0e0e0");
                col8.prop("disabled", true);
                col8.css("background-color", "#e0e0e0");
                col9.prop("disabled", true);
                col9.css("background-color", "#e0e0e0");
                col10.prop("disabled", true);
                col10.css("background-color", "#e0e0e0");
            }
            /*else{
              col1.prop("disabled", false);
              col1.css("background-color", "");
              col2.prop("disabled", true);
              col2.css("background-color", "#e0e0e0");
              col3.prop("disabled", true);
              col3.css("background-color", "#e0e0e0");
              col4.prop("disabled", false);
              col4.css("background-color", "");
              col5.prop("disabled", true);
              col5.css("background-color", "#e0e0e0");
              col6.prop("disabled", true);
              col6.css("background-color", "#e0e0e0");
              col7.prop("disabled", false);
              col7.css("background-color", "");
              col8.prop("disabled", false);
              col8.css("background-color", "");
              col9.prop("disabled", false);
              col9.css("background-color", "");
              col10.prop("disabled", false);
              col10.css("background-color", "");
            }*/
        }
    }
    if (cautare == 1) {
        //fields_table1_c2[IdElementActiv - 1].innerHTML = "";
        cautare = 0;
    } else {
        var field_name_combustibil = "CAP1_A-" + IdElementActiv;
        var combustibil_val = jQuery(fields_table1_c1[IdElementActiv - 1]).val();
        //jQuery("#" + field_name_combustibil).val(combustibil_val).trigger('change');
    }

}
