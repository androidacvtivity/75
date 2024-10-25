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
        const array_7010_7050 = [];
        const array_7011_7051 = [];
        const array_7012_7052 = [];
        const array_7013_7053 = [];
        const array_7014_7054 = [];
        const array_7015_7055 = [];
        const array_8010_8030 = [];
        const array_8011_8031 = [];
        const array_8012_8052 = [];
        const array_8013_8033 = [];
        const array_8014_8034 = [];
        const array_8015_8035 = [];
        const array_0110_6200_col6 = [];
        const array_0110_6200_col7 = [];
        const array_0110_0390_col6 = [];
        const array_0110_0390_col7 = [];
        const array_0110_0390_ECHIV = [];
        const array_4100_4699_col6 = [];
        const array_4100_4699_col7 = [];
        const array_4100_4699_ECHIV = [];
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

        var nr_cod_4000 = 0;
        var nr_rand_7000 = 0;
        var nr_rand_7010 = 0;
        var nr_rand_7050 = 0;
        var nr_rand_8000 = 0;
        var nr_rand_8010 = 0;
        var nr_rand_8030 = 0;
        var tab1c1_7000 = 0;
        var tab1c1_7001 = 0;
        var tab1c1_7010 = 0;
        var tab1c1_7011 = 0;
        var tab1c1_7012 = 0;
        var tab1c1_7013 = 0;
        var tab1c1_7014 = 0;
        var tab1c1_7015 = 0;
        var tab1c1_7020 = 0;
        var tab1c1_7030 = 0;
        var tab1c1_7040 = 0;
        var tab1c1_7050 = 0;
        var tab1c1_7051 = 0;
        var tab1c1_7052 = 0;
        var tab1c1_7053 = 0;
        var tab1c1_7054 = 0;
        var tab1c1_7055 = 0;
        var tab1c2_7000 = 0;
        var tab1c2_7010 = NaN;
        var tab1c2_7011 = NaN;
        var tab1c2_7012 = NaN;
        var tab1c2_7013 = NaN;
        var tab1c2_7014 = NaN;
        var tab1c2_7015 = NaN;
        var tab1c2_7050 = NaN;
        var tab1c2_7051 = NaN;
        var tab1c2_7052 = NaN;
        var tab1c2_7053 = NaN;
        var tab1c2_7054 = NaN;
        var tab1c2_7055 = NaN;
        var tab1c6_4000 = 0;
        var tab1c7_4000 = 0;
        var tab1echiv_4000 = 0;
        var tab1c13_7000 = 0;
        var tab1c1_8000 = 0;
        var tab1c1_8001 = 0;
        var tab1c1_8010 = 0;
        var tab1c1_8011 = 0;
        var tab1c1_8012 = 0;
        var tab1c1_8013 = 0;
        var tab1c1_8014 = 0;
        var tab1c1_8015 = 0;
        var tab1c1_8030 = 0;
        var tab1c1_8031 = 0;
        var tab1c1_8032 = 0;
        var tab1c1_8033 = 0;
        var tab1c1_8034 = 0;
        var tab1c1_8040 = 0;
        var tab1c1_8050 = 0;
        var tab1c1_8060 = 0;
        var tab1c2_8000 = 0;
        var tab1c2_8010 = NaN;
        var tab1c2_8011 = NaN;
        var tab1c2_8012 = NaN;
        var tab1c2_8013 = NaN;
        var tab1c2_8014 = NaN;
        var tab1c2_8015 = NaN;
        var tab1c2_8030 = NaN;
        var tab1c2_8031 = NaN;
        var tab1c2_8033 = NaN;
        var tab1c2_8034 = NaN;
        var tab1c2_8035 = NaN;
        var tab1c2_8052 = NaN;
        var tab1c13_8000 = 0;
        var tab11c1_7000 = 0;
        var tab11c1_8000 = 0;

        let pushedErrors = new Set();

        for (var i = 0; i < values.CAP1_R_CI.length; i++) {
            // Asignarea valorilor din campuri
            // Capitolul I
            var tab1ci = Number(values.CAP1_R_CI[i]);
            var tab1a = Number(values.CAP1_A[i]);
            var tab1c_tec = Number(values.CAP1_R_TEC[i]);
            var tab1c_um = Number(values.CAP1_A_UM[i]);
            var tab1c_echiv = Number(values.CAP1_R_ECHIV[i]);
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

            // Capitolul I.I
            var tab11ci = Number(values.CAP11_R_CI[i]);
            var tab11a = Number(values.CAP11_A[i]);
            var tab11c_tec = Number(values.CAP11_R_TEC[i]);
            var tab11c_um = Number(values.CAP11_A_UM[i]);
            var tab11c1 = Number(values.CAP11_R_C01[i]);

            var tab1sum_1_2_3_4 = tab1c1 + tab1c2 + tab1c3 + tab1c4;
            var tab1sum_6_7_8_9_10_11_12_13_14 = tab1c6 + tab1c7 + tab1c8 + tab1c9 + tab1c10 + tab1c11 + tab1c12 + tab1c13 + tab1c14;

            // captarea variabilelor specifice tipului de combustibil/energie
            if (tab1a == 4000) {
                nr_cod_4000 = tab1a;
                tab1c6_4000 = tab1c6;
                tab1c7_4000 = tab1c7;
                tab1echiv_4000 = tab1c_echiv;
            }
            if (tab1a == 7000) {
                nr_rand_7000 = tab1ci;
                tab1c1_7000 = tab1c1;
                tab1c2_7000 = tab1c2;
                tab1c13_7000 = tab1c13;
            }
            if (tab1a == 7001) {
                tab1c1_7001 = tab1c1;
            }
            if (tab1a == 7010) {
                nr_rand_7010 = tab1ci;
                tab1c1_7010 = tab1c1;
                tab1c2_7010 = tab1c2;

                array_7010_7050.push(tab1a);
            }
            if (tab1a == 7011) {
                tab1c1_7011 = tab1c1;
                tab1c2_7011 = tab1c2;

                array_7011_7051.push(tab1a);
            }
            if (tab1a == 7012) {
                tab1c1_7012 = tab1c1;
                tab1c2_7012 = tab1c2;

                array_7012_7052.push(tab1a);
            }
            if (tab1a == 7013) {
                tab1c1_7013 = tab1c1;
                tab1c2_7013 = tab1c2;

                array_7013_7053.push(tab1a);
            }
            if (tab1a == 7014) {
                tab1c1_7014 = tab1c1;
                tab1c2_7014 = tab1c2;

                array_7014_7054.push(tab1a)
            }
            if (tab1a == 7015) {
                tab1c1_7015 = tab1c1;
                tab1c2_7015 = tab1c2;

                array_7015_7055.push(tab1a);
            }
            if (tab1a == 7020) {
                tab1c1_7020 = tab1c1;
            }
            if (tab1a == 7030) {
                tab1c1_7030 = tab1c1;
            }
            if (tab1a == 7040) {
                tab1c1_7040 = tab1c1;
            }
            if (tab1a == 7050) {
                nr_rand_7050 = tab1ci;
                tab1c1_7050 = tab1c1;
                tab1c2_7050 = tab1c2;

                array_7010_7050.push(tab1a);
            }
            if (tab1a == 7051) {
                tab1c1_7051 = tab1c1;
                tab1c2_7051 = tab1c2;

                array_7011_7051.push(tab1a);
            }
            if (tab1a == 7052) {
                tab1c1_7052 = tab1c1;
                tab1c2_7052 = tab1c2;

                array_7012_7052.push(tab1a);
            }
            if (tab1a == 7053) {
                tab1c1_7053 = tab1c1;
                tab1c2_7053 = tab1c2;

                array_7013_7053.push(tab1a);
            }
            if (tab1a == 7054) {
                tab1c1_7054 = tab1c1;
                tab1c2_7054 = tab1c2;

                array_7014_7054.push(tab1a);
            }
            if (tab1a == 7055) {
                tab1c1_7055 = tab1c1;
                tab1c2_7055 = tab1c2;

                array_7015_7055.push(tab1a);
            }
            if (tab1a == 8000) {
                nr_rand_8000 = tab1ci;
                tab1c1_8000 = tab1c1;
                tab1c2_8000 = tab1c2;
                tab1c13_8000 = tab1c13;
            }
            if (tab1a == 8001) {
                tab1c1_8001 = tab1c1;
            }
            if (tab1a == 8010) {
                nr_rand_8010 = tab1ci;
                tab1c1_8010 = tab1c1;
                tab1c2_8010 = tab1c2;

                array_8010_8030.push(tab1a);
            }
            if (tab1a == 8011) {
                tab1c1_8011 = tab1c1;
                tab1c2_8011 = tab1c2;

                array_8011_8031.push(tab1a);
            }
            if (tab1a == 8012) {
                tab1c1_8012 = tab1c1;
                tab1c2_8012 = tab1c2;

                array_8012_8052.push(tab1a);
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
                nr_rand_8030 = tab1ci;
                tab1c1_8030 = tab1c1;
                tab1c2_8030 = tab1c2;

                array_8010_8030.push(tab1a);
            }
            if (tab1a == 8031) {
                tab1c1_8031 = tab1c1;
                tab1c2_8031 = tab1c2;

                array_8011_8031.push(tab1a);
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
            }
            if (tab1a == 8050) {
                tab1c1_8050 = tab1c1;
            }
            if (tab1a == 8052) {
                tab1c2_8052 = tab1c2;

                array_8012_8052.push(tab1a);
            }
            if (tab1a == 8060) {
                tab1c1_8060 = tab1c1;
            }
            if (tab11a == 7000) {
                tab11c1_7000 = tab11c1;
            }
            if (tab11a == 8000) {
                tab11c1_8000 = tab11c1;
            }
            if (tab1a >= 110 && tab1a <= 6200) {
                array_nr_rand_0110_6200.push(tab1ci);
                array_0110_6200.push(tab1a);
                array_0110_6200_col6.push(tab1c6);
                array_0110_6200_col7.push(tab1c7);
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
            // Validarea 6
            if (tab1c5 != tab1sum_1_2_3_4) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C05',
                    'weight': 1,
                    'index': i,
                    'msg': concatMessage(
                        Drupal.t("Col. 5 = Col. 1 + Col.2 + Col.3 + Col.4")
                    ),
                });
            }

            // Validarea 7
            if (tab1c5 != tab1sum_6_7_8_9_10_11_12_13_14) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C05',
                    'weight': 2,
                    'index': i,
                    'msg': concatMessage(
                        Drupal.t("Col. 5 = Col. 6 + Col.7 + Col.8 + Col.9 + Col.10 + Col.11 + Col.12 + Col.13 + Col.14")
                    ),
                });
            }

            // Validarea 17
            if (tab1a >= 110 && tab1a < 1000 && tab1c2 > 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R_C02',
                    'weight': 12,
                    'index': i,
                    'msg': concatMessage(
                        Drupal.t("Sunt date în coloana 2 Capitol 1 rînd [0@CAP1_A] - valabil", { '@CAP1_A': tab1a })
                    ),
                });
            } else if (tab1a >= 1000 && tab1a <= 6200 && tab1c2 > 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R_C02',
                    'weight': 12,
                    'index': i,
                    'msg': concatMessage(
                        Drupal.t("Sunt date în coloana 2 Capitol 1 rînd [@CAP1_A] - valabil", { '@CAP1_A': tab1a })
                    ),
                });
            }

            // Validarea 18
            if (array_7010_7050.includes(7010) || array_7010_7050.includes(7050)) {
                for (var t1 = 0; t1 < array_0110_6200.length; t1++) {
                    if (array_0110_6200_col6[t1] > 0 && (tab1c2_7010 <= 0 || tab1c2_7050 <= 0)) {
                        let errorKey = `${array_0110_6200[t1]}-${t1}`;
                        let i = array_nr_rand_0110_6200[t1] - 1;

                        if (array_0110_6200[t1] >= 110 && array_0110_6200[t1] < 1000 && !pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 13,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [0@CAP1_A], atunci  col. 2 > 0 rînd 7010, 7050", { '@CAP1_A': array_0110_6200[t1] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        } else if (array_0110_6200[t1] >= 1000 && array_0110_6200[t1] <= 6200 && !pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 13,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 7010, 7050", { '@CAP1_A': array_0110_6200[t1] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 19
            if (array_8010_8030.includes(8010) || array_8010_8030.includes(8030)) {
                for (var t2 = 0; t2 < array_0110_6200.length; t2++) {
                    if (array_0110_6200_col7[t2] > 0 && (tab1c2_8010 <= 0 || tab1c2_8030 <= 0)) {
                        let errorKey = `${array_0110_6200[t2]}-${t2}`;
                        let i = array_nr_rand_0110_6200[t2] - 1;

                        if (array_0110_6200[t2] >= 110 && array_0110_6200[t2] < 1000 && !pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 14,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [0@CAP1_A], atunci  col. 2 > 0 rînd 8010, 8030", { '@CAP1_A': array_0110_6200[t2] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        } else if (array_0110_6200[t2] >= 1000 && array_0110_6200[t2] <= 6200 && !pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 14,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 8010, 8030", { '@CAP1_A': array_0110_6200[t2] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 20
            if (array_7011_7051.includes(7011) || array_7011_7051.includes(7051)) {
                for (var t3 = 0; t3 < array_0110_0390.length; t3++) {

                    // Validarea 30
                    let val3 = array_0110_0390_col6[t3] * array_0110_0390_ECHIV[t3] / (tab1c2_7011 + tab1c2_7051);

                    if (val3 < 0.15 || val3 > 0.6) {
                        let i = array_nr_rand_0110_0390[t3] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C06',
                            'weight': 15,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [0@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 7011 + 7051) <= 0.6", { '@CAP1_A': array_0110_0390[t3] })
                            ),
                        });
                    }

                    if (array_0110_0390_col6[t3] > 0 && (tab1c2_7011 <= 0 || tab1c2_7051 <= 0)) {
                        let errorKey = `${array_0110_0390[t3]}-${t3}`;
                        let i = array_nr_rand_0110_0390[t3] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 15,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [0@CAP1_A], atunci  col. 2 > 0 rînd 7011, 7051", { '@CAP1_A': array_0110_0390[t3] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 21
            if (array_8011_8031.includes(8011) || array_8011_8031.includes(8031)) {
                for (var t4 = 0; t4 < array_0110_0390.length; t4++) {

                    // Validarea 31
                    let val4 = array_0110_0390_col6[t4] * array_0110_0390_ECHIV[t4] / (tab1c2_8011 + tab1c2_8031);

                    if (val4 < 0.15 || val4 > 0.3) {
                        let i = array_nr_rand_0110_0390[t4] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C06',
                            'weight': 16,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [0@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 8011 + 8031) <= 0.3", { '@CAP1_A': array_0110_0390[t4] })
                            ),
                        });
                    }
                    if (array_0110_0390_col7[t4] > 0 && (tab1c2_8011 <= 0 || tab1c2_8031 <= 0)) {
                        let errorKey = `${array_0110_0390[t4]}-${t4}`;
                        let i = array_nr_rand_0110_0390[t4] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 16,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [0@CAP1_A], atunci  col. 2 > 0 rînd 8011, 8031", { '@CAP1_A': array_0110_0390[t4] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 22
            if (array_7012_7052.includes(7012) || array_7012_7052.includes(7052)) {
                for (var t5 = 0; t5 < array_4100_4699.length; t5++) {

                    // Validarea 32
                    let val5 = array_4100_4699_col6[t5] * array_4100_4699_ECHIV[t5] / (tab1c2_7012 + tab1c2_7052);

                    if (val5 < 0.15 || val5 > 0.6) {
                        let i = array_nr_rand_4100_4699[t5] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C06',
                            'weight': 17,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 7012 + 7052) <= 0.6", { '@CAP1_A': array_4100_4699[t5] })
                            ),
                        });
                    }
                    if (array_4100_4699_col6[t5] > 0 && (tab1c2_7012 <= 0 || tab1c2_7052 <= 0)) {
                        let errorKey = `${array_4100_4699[t5]}-${t5}`;
                        let i = array_nr_rand_4100_4699[t5] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 17,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 7012, 7052", { '@CAP1_A': array_4100_4699[t5] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 23
            if (array_8012_8052.includes(8012) || array_8012_8052.includes(8052)) {
                for (var t6 = 0; t6 < array_4100_4699.length; t6++) {

                    // Validarea 33
                    let val6 = array_4100_4699_col7[t6] * array_4100_4699_ECHIV[t6] / (tab1c2_8012 + tab1c2_8052);

                    if (val6 < 0.15 || val6 > 0.3) {
                        let i = array_nr_rand_4100_4699[t6] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C07',
                            'weight': 18,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 7 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 8012 + 8052) <= 0.3", { '@CAP1_A': array_4100_4699[t6] })
                            ),
                        });
                    }
                    if (array_4100_4699_col7[t6] > 0 && (tab1c2_8012 <= 0 || tab1c2_8052 <= 0)) {
                        let errorKey = `${array_4100_4699[t6]}-${t6}`;
                        let i = array_nr_rand_4100_4699[t6] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 18,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 8012, 8052", { '@CAP1_A': array_4100_4699[t6] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 24
            if ((array_7013_7053.includes(7013) || array_7013_7053.includes(7053)) && nr_cod_4000 == 4000) {

                // Validarea 34
                let val1 = tab1c6_4000 * tab1echiv_4000 / (tab1c2_7013 + tab1c2_7053);

                if (val1 < 0.15 || val1 > 0.6) {

                    webform.errors.push({
                        'fieldName': 'CAP1_R_C06',
                        'weight': 19,
                        'index': i,
                        'msg': concatMessage(
                            Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 7013 + 7053) <= 0.6", { '@CAP1_A': nr_cod_4000 })
                        ),
                    });
                }
                if (tab1c6_4000 > 0 && (tab1c2_7013 <= 0 || tab1c2_7053 <= 0)) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R_C06',
                        'weight': 19,
                        'index': i,
                        'msg': concatMessage(
                            Drupal.t("Dacă coloana 6 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 7013, 7053", { '@CAP1_A': nr_cod_4000 })
                        ),
                    });
                }
            }

            // Validarea 25
            if ((array_8013_8033.includes(8013) || array_8013_8033.includes(8033)) && nr_cod_4000 == 4000) {

                // Validarea 35
                let val2 = tab1c7_4000 * tab1echiv_4000 / (tab1c2_8013 + tab1c2_8033);

                if (val2 < 0.15 || val2 > 0.3) {

                    webform.errors.push({
                        'fieldName': 'CAP1_R_C07',
                        'weight': 20,
                        'index': i,
                        'msg': concatMessage(
                            Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 7 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 8013 + 8033) <= 0.3", { '@CAP1_A': nr_cod_4000 })
                        ),
                    });
                }
                if (tab1c7_4000 > 0 && (tab1c2_8013 <= 0 || tab1c2_8033 <= 0)) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R_C07',
                        'weight': 20,
                        'index': i,
                        'msg': concatMessage(
                            Drupal.t("Dacă coloana 7 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 8013, 8033", { '@CAP1_A': nr_cod_4000 })
                        ),
                    });
                }
            }

            // Validarea 26
            if (array_7015_7055.includes(7015) || array_7015_7055.includes(7055)) {
                for (var t7 = 0; t7 < array_5111_6200.length; t7++) {

                    // Validarea 36
                    let val7 = array_5111_6200_col6[t7] * array_5111_6200_ECHIV[t7] / (tab1c2_7015 + tab1c2_7055);

                    if (val7 < 0.15 || val7 > 0.6) {
                        let i = array_nr_rand_5111_6200[t7] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C06',
                            'weight': 21,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 7015 + 7055) <= 0.6", { '@CAP1_A': array_5111_6200[t7] })
                            ),
                        });
                    }
                    if (array_5111_6200_col6[t7] > 0 && (tab1c2_7015 <= 0 || tab1c2_7055 <= 0)) {
                        let errorKey = `${array_5111_6200[t7]}-${t7}`;
                        let i = array_nr_rand_5111_6200[t7] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 21,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 7015, 7055", { '@CAP1_A': array_5111_6200[t7] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 27
            if (array_8015_8035.includes(8015) || array_8015_8035.includes(8035)) {
                for (var t8 = 0; t8 < array_5111_6200.length; t8++) {

                    // Validarea 37
                    let val8 = array_5111_6200_col7[t8] * array_5111_6200_ECHIV[t8] / (tab1c2_8015 + tab1c2_8035);

                    if (val8 < 0.15 || val8 > 0.3) {
                        let i = array_nr_rand_5111_6200[t8] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C07',
                            'weight': 22,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 7 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 8015 + 8035) <= 0.3", { '@CAP1_A': array_5111_6200[t8] })
                            ),
                        });
                    }
                    if (array_5111_6200_col7[t8] > 0 && (tab1c2_8015 <= 0 || tab1c2_8035 <= 0)) {
                        let errorKey = `${array_5111_6200[t8]}-${t8}`;
                        let i = array_nr_rand_5111_6200[t8] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 22,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 8015, 8035", { '@CAP1_A': array_5111_6200[t8] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 28
            if (array_7014_7054.includes(7014) || array_7014_7054.includes(7054)) {
                for (var t9 = 0; t9 < array_1110_2000.length; t9++) {

                    // Validarea 38
                    let val9 = array_1110_2000_col6[t9] * array_1110_2000_ECHIV[t9] / (tab1c2_7014 + tab1c2_7054);

                    if (val9 < 0.15 || val9 > 0.6) {
                        let i = array_nr_rand_1110_2000[t9] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C06',
                            'weight': 23,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 6 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 7014 + 7054) <= 0.6", { '@CAP1_A': array_1110_2000[t9] })
                            ),
                        });
                    }
                    if (array_1110_2000_col6[t9] > 0 && (tab1c2_7014 <= 0 || tab1c2_7054 <= 0)) {
                        let errorKey = `${array_1110_2000[t9]}-${t9}`;
                        let i = array_nr_rand_1110_2000[t9] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C06',
                                'weight': 23,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 6 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 7014, 7054", { '@CAP1_A': array_1110_2000[t9] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }

            // Validarea 29
            if (array_8014_8034.includes(8014) || array_8014_8034.includes(8034)) {
                for (var t10 = 0; t10 < array_1110_2000.length; t10++) {

                    // Validarea 39
                    let val10 = array_1110_2000_col7[t10] * array_1110_2000_ECHIV[t10] / (tab1c2_8014 + tab1c2_8034);

                    if (val10 < 0.15 || val10 > 0.3) {
                        let i = array_nr_rand_1110_2000[t10] - 1;

                        webform.errors.push({
                            'fieldName': 'CAP1_R_C07',
                            'weight': 24,
                            'index': i,
                            'msg': concatMessage(
                                Drupal.t("Valoarea nu se încadrează în limitele: 0.15 <= col. 7 rînd [@CAP1_A] * valoarea corespunzătoare a coeficientului / (suma col. 2 rîndurilor 8014 + 8034) <= 0.3", { '@CAP1_A': array_1110_2000[t10] })
                            ),
                        });
                    }
                    if (array_1110_2000_col7[t10] > 0 && (tab1c2_8014 <= 0 || tab1c2_8034 <= 0)) {
                        let errorKey = `${array_1110_2000[t10]}-${t10}`;
                        let i = array_nr_rand_1110_2000[t10] - 1;

                        if (!pushedErrors.has(errorKey)) {
                            webform.errors.push({
                                'fieldName': 'CAP1_R_C07',
                                'weight': 24,
                                'index': i,
                                'msg': concatMessage(
                                    Drupal.t("Dacă coloana 7 > 0 rînd [@CAP1_A], atunci  col. 2 > 0 rînd 8014, 8034", { '@CAP1_A': array_1110_2000[t10] })
                                ),
                            });

                            pushedErrors.add(errorKey);
                        }
                    }
                }
            }
        }

        // sumele
        var sum1 = tab1c1_7010 + tab1c1_7020 + tab1c1_7030 + tab1c1_7040 + tab1c1_7050;
        var sum2 = tab1c1_7011 + tab1c1_7012 + tab1c1_7013 + tab1c1_7014 + tab1c1_7015;
        var sum3 = tab1c1_7051 + tab1c1_7052 + tab1c1_7053 + tab1c1_7054 + tab1c1_7055;
        var sum4 = tab1c1_8010 + tab1c1_8030 + tab1c1_8040 + tab1c1_8050 + tab1c1_8060;
        var sum5 = tab1c1_8011 + tab1c1_8012 + tab1c1_8013 + tab1c1_8014 + tab1c1_8015;
        var sum6 = tab1c1_8031 + tab1c1_8032 + tab1c1_8033 + tab1c1_8034;

        // fixuri pentru cazurile cand eroarea se arata in randul gresit
        for (var j = nr_rand_7000 - 1; j < nr_rand_7000; j++) {
            if (j < 0) {
                break;
            }

            // Validarea 8
            if (tab1c2_7000 != tab11c1_7000 || tab1c2_7000 != sum1) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C02',
                    'weight': 3,
                    'index': j,
                    'msg': concatMessage(
                        Drupal.t("Rândul 7000 Cap. I col. 2 = Rândul 7000 Cap. I.I col. 1 = suma Rând. 7010 + 7020 + 7030 + 7040 + 7050 col. 1")
                    ),
                });
            }

            // Validarea 14
            if (tab1c1_7000 < tab1c1_7001) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 8,
                    'index': j,
                    'msg': concatMessage(
                        Drupal.t("Rândul 7000 col. 1 ≥ Rândul 7001 col. 1")
                    ),
                });
            }

            // Validarea 16
            if (tab1c13_7000 > 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R_C013',
                    'weight': 10,
                    'index': j,
                    'msg': concatMessage(
                        Drupal.t("Rândul 7000, Coloana 13 > 0 - valabil pentru rețele electrice")
                    ),
                });
            }
        }
        for (var j0 = nr_rand_7010 - 1; j0 < nr_rand_7010; j0++) {
            if (j0 < 0) {
                break;
            }

            // Validarea 9
            if (tab1c1_7010 != sum2) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 4,
                    'index': j0,
                    'msg': concatMessage(
                        Drupal.t("Rândul 7010 col. 1 = suma Rând. 7011 + 7012 + 7013 + 7014 + 7015 col. 1")
                    ),
                });
            }
        }
        for (var j1 = nr_rand_7050 - 1; j1 < nr_rand_7050; j1++) {
            if (j1 < 0) {
                break;
            }

            // Validarea 10
            if (tab1c1_7050 != sum3) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 5,
                    'index': j1,
                    'msg': concatMessage(
                        Drupal.t("Rândul 7050 col. 1 = suma Rând. 7051 + 7052 + 7053 + 7054 + 7055 col. 1")
                    ),
                });
            }
        }
        for (var j2 = nr_rand_8000 - 1; j2 < nr_rand_8000; j2++) {
            if (j2 < 0) {
                break;
            }

            // Validarea 11
            if (tab1c2_8000 != tab11c1_8000 || tab1c2_8000 != sum4) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C02',
                    'weight': 6,
                    'index': j2,
                    'msg': concatMessage(
                        Drupal.t("Rândul 8000 Cap. I col. 2 = Rândul 8000 Cap. I.I col. 1 = suma Rând. 8010 + 8030 + 8040 + 8050 + 8060 col. 1")
                    ),
                });
            }

            // Validarea 15
            if (tab1c1_8000 < tab1c1_8001) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 9,
                    'index': j2,
                    'msg': concatMessage(
                        Drupal.t("Rândul 8000 col. 1 ≥ Rândul 8001 col. 1")
                    ),
                });
            }

            // Validarea 17
            if (tab1c13_8000 > 0) {
                webform.warnings.push({
                    'fieldName': 'CAP1_R_C013',
                    'weight': 11,
                    'index': j2,
                    'msg': concatMessage(
                        Drupal.t("Rândul 8000, Coloana 13 > 0 - valabil pentru rețele termice")
                    ),
                });
            }
        }
        for (var j3 = nr_rand_8010 - 1; j3 < nr_rand_8010; j3++) {
            if (j3 < 0) {
                break;
            }

            // Validarea 12
            if (tab1c1_8010 != sum5) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 7,
                    'index': j3,
                    'msg': concatMessage(
                        Drupal.t("Rândul 8010 col. 1 = suma Rând. 8011 + 8012 + 8013 + 8014 + 8015 col. 1")
                    ),
                });
            }
        }
        for (var j4 = nr_rand_8030 - 1; j4 < nr_rand_8030; j4++) {
            if (j4 < 0) {
                break;
            }

            // Validarea 13
            if (tab1c1_8030 != sum6) {
                webform.errors.push({
                    'fieldName': 'CAP1_R_C01',
                    'weight': 8,
                    'index': j4,
                    'msg': concatMessage(
                        Drupal.t("Rândul 8030 col. 1 = suma Rând. 8031 + 8032 + 8033 + 8034 col. 1")
                    ),
                });
            }
        }

        webform.validatorsStatus["be1"] = 1;
        validateWebform();
    };
})(jQuery);

webform.afterLoad.be1 = function () {
    if (!Drupal.settings.mywebform.preview) {
        jQuery("td").removeClass("min-width");
        var arraySicpe = [""];

        jQuery.each(arraySicpe, function (key, value) {
            set_sicpe_to_select(value, null, null);
            set_options_html(value);
        });
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
    return Drupal.t('Error code: @error_code', { '@error_code': errorCode });
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
    var unMasura = jQuery(elem).closest("tr").find("input.unit-mas");
    var tec = jQuery(elem).closest("tr").find("input.echivalentii");
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
                //break;
            }
        }
    }
    //unMasura.val("unit").change();
}
