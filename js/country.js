$(document).ready(function() {
    var flag_target = $('');
    var mask_target = $('');
    var tel1_target = $('');
    var cntKod_target = $('');
    var kodId_target = $('');
    var inpCnt_target = $('');
    var allmaskNom;
    var allcntKod;
    var allKodId;
    var allphone;

    var delallflag = document.querySelectorAll('.allflag');
    var delallmaskNom = document.querySelectorAll('.allmaskNom');
    var delallcntKod = document.querySelectorAll('.allcntKod');
    var delallphone = document.querySelectorAll('.allphone');
    var delallKodId = document.querySelectorAll('.allKodId');

    function reallflag() {
        for (var i = 0; i < delallflag.length; i++) {
            delallflag[i].classList.remove('allflag')
        }
    }

    function reallmaskNom() {
        for (var i = 0; i < delallmaskNom.length; i++) {
            delallmaskNom[i].classList.remove('allmaskNom')
        }
    }

    function reallcntKod() {
        for (var i = 0; i < delallcntKod.length; i++) {
            delallcntKod[i].classList.remove('allcntKod')
        }
    }

    function reallphone() {
        for (var i = 0; i < delallphone.length; i++) {
            delallphone[i].classList.remove('allphone')
        }
    }

    function reallKodId() {
        for (var i = 0; i < delallKodId.length; i++) {
            delallKodId[i].classList.remove('allKodId')
        }
    }

    allmaskNom = $('.allmaskNom');
    allcntKod = $('.allcntKod');
    allKodId = $('.allKodId');
    allphone = $('.allphone');
    cntr();

    $('.iti_click-1').click(function() {

        reallflag();
        reallmaskNom();
        reallcntKod();
        reallphone();
        reallKodId();
        allmaskNom = $('');
        allphone = $('');
        $('.list-1').show();
        flag_target = $('#flag-1');
        mask_target = $('.maskNom-1');
        tel1_target = $('#tel1-1');
        cntKod_target = $('#cntKod-1');
        kodId_target = $('#kodId-1');
        inpCnt_target = $('#inpCnt-1');
        return [flag_target, mask_target, tel1_target, kodId_target, cntKod_target, inpCnt_target];
        cntr();

    });

    $('.iti_click-2').click(function() {

        reallflag();
        reallmaskNom();
        reallcntKod();
        reallphone();
        reallKodId();
        allmaskNom = $('');
        allphone = $('');
        $('.list-2').show();
        flag_target = $('#flag-2');
        mask_target = $('.maskNom-2');
        tel1_target = $('#tel1-2');
        cntKod_target = $('#cntKod-2');
        kodId_target = $('#kodId-2');
        inpCnt_target = $('#inpCnt-2');
        return [flag_target, mask_target, tel1_target, kodId_target, cntKod_target, inpCnt_target];
        cntr();

    });

    $('.iti_click-3').click(function() {

        reallflag();
        reallmaskNom();
        reallcntKod();
        reallphone();
        reallKodId();
        allmaskNom = $('');
        allphone = $('');
        $('.list-3').show();
        flag_target = $('#flag-3');
        mask_target = $('.maskNom-3');
        tel1_target = $('#tel1-3');
        cntKod_target = $('#cntKod-3');
        kodId_target = $('#kodId-3');
        inpCnt_target = $('#inpCnt-3');
        return [flag_target, mask_target, tel1_target, kodId_target, cntKod_target, inpCnt_target];
        cntr();

    });

    $('.iti_click-4').click(function() {

        reallflag();
        reallmaskNom();
        reallcntKod();
        reallphone();
        reallKodId();
        allmaskNom = $('');
        allphone = $('');
        $('.list-4').show();
        flag_target = $('#flag-4');
        mask_target = $('.maskNom-4');
        tel1_target = $('#tel1-4');
        cntKod_target = $('#cntKod-4');
        kodId_target = $('#kodId-4');
        inpCnt_target = $('#inpCnt-4');
        return [flag_target, mask_target, tel1_target, kodId_target, cntKod_target, inpCnt_target];
        cntr();

    });

    $('#inpSea-1').on('input', function() {

        $(".list-1 p").each(function() {
            if (!$(this).text().toLowerCase().includes($('#inpSea-1').val().toLowerCase()))
                $(this).hide();
            else
                $(this).show();
        });
    });

    $(".list-1 p").click(function() {
        flag_target.removeClass();
        flag_target.addClass('iti__flag');
        flag_target.addClass("iti__" + $(this).attr('id'));
        $('.list-1').hide();
        $('#cntKod-1').attr('value', $(this).attr('id'));
        cntr();
    });

    $('#inpSea-2').on('input', function() {

        $(".list-2 p").each(function() {
            if (!$(this).text().toLowerCase().includes($('#inpSea-2').val().toLowerCase()))
                $(this).hide();
            else
                $(this).show();
        });
    });

    $(".list-2 p").click(function() {
        flag_target.removeClass();
        flag_target.addClass('iti__flag');
        flag_target.addClass("iti__" + $(this).attr('id'));
        $('.list-2').hide();
        $('#cntKod-2').attr('value', $(this).attr('id'));
        cntr();
    });

    $('#inpSea-3').on('input', function() {

        $(".list-3 p").each(function() {
            if (!$(this).text().toLowerCase().includes($('#inpSea-3').val().toLowerCase()))
                $(this).hide();
            else
                $(this).show();
        });
    });

    $(".list-3 p").click(function() {
        flag_target.removeClass();
        flag_target.addClass('iti__flag');
        flag_target.addClass("iti__" + $(this).attr('id'));
        $('.list-3').hide();
        $('#cntKod-3').attr('value', $(this).attr('id'));
        cntr();
    });

    $('#inpSea-4').on('input', function() {

        $(".list-4 p").each(function() {
            if (!$(this).text().toLowerCase().includes($('#inpSea-4').val().toLowerCase()))
                $(this).hide();
            else
                $(this).show();
        });
    });

    $(".list-4 p").click(function() {
        flag_target.removeClass();
        flag_target.addClass('iti__flag');
        flag_target.addClass("iti__" + $(this).attr('id'));
        $('.list-4').hide();
        $('#cntKod-4').attr('value', $(this).attr('id'));
        cntr();
    });


    function cntr() {
        if (flag_target.hasClass('iti__at') || $('.allflag').hasClass('iti__at')) {

            allmaskNom.text("+43");
            allKodId.val("+43");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Австрия');
            mask_target.text("+43");
            kodId_target.val("+43");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__au') || $('.allflag').hasClass('iti__au')) {

            allmaskNom.text("+61");
            allKodId.val("+61");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Австралия');
            mask_target.text("+61");
            kodId_target.val("+61");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__al') || $('.allflag').hasClass('iti__al')) {
            allmaskNom.text("+355");
            allKodId.val("+355");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Албания');
            mask_target.text("+355");
            kodId_target.val("+355");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__dz') || $('.allflag').hasClass('iti__dz')) {
            allmaskNom.text("+213");
            allKodId.val("+213");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Алжир');
            mask_target.text("+213");
            kodId_target.val("+213");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ao') || $('.allflag').hasClass('iti__ao')) {
            allmaskNom.text("+244");
            allKodId.val("+244");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Ангола');
            mask_target.text("+244");
            kodId_target.val("+244");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ag') || $('.allflag').hasClass('iti__ag')) {
            allmaskNom.text("+1268");
            allKodId.val("+1268");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Антигуа и Барбуда');
            mask_target.text("+1268");
            kodId_target.val("+1268");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__ar') || $('.allflag').hasClass('iti__ar')) {
            allmaskNom.text("+54");
            allKodId.val("+54");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Аргентина');
            mask_target.text("+54");
            kodId_target.val("+54");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__am') || $('.allflag').hasClass('iti__am')) {
            allmaskNom.text("+374");
            allKodId.val("+374");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Армения');
            mask_target.text("+374");
            kodId_target.val("+374");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ad') || $('.allflag').hasClass('iti__ad')) {
            allmaskNom.text("+376");
            allKodId.val("+376");
            allphone.attr('maxlength', '6');
            allphone.attr('pattern', '[0-9]{6}');
            allphone.attr('placeholder', '123 456');
            inpCnt_target.attr('value', 'Андорра');
            mask_target.text("+376");
            kodId_target.val("+376");
            tel1_target.attr('maxlength', '6');
            tel1_target.attr('pattern', '[0-9]{6}');
            tel1_target.attr('placeholder', '123 456');
            return;
        }
        if (flag_target.hasClass('iti__az') || $('.allflag').hasClass('iti__az')) {
            allmaskNom.text("+994");
            allKodId.val("+994");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Азербайджан');
            mask_target.text("+994");
            kodId_target.val("+994");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__af') || $('.allflag').hasClass('iti__af')) {
            allmaskNom.text("+93");
            allKodId.val("+93");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Афганистан');
            mask_target.text("+93");
            kodId_target.val("+93");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__bs') || $('.allflag').hasClass('iti__bs')) {

            allmaskNom.text("+1242");
            allKodId.val("+1242");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Багамы');
            mask_target.text("+1242");
            kodId_target.val("+1242");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__bh') || $('.allflag').hasClass('iti__bh')) {

            allmaskNom.text("+973");
            allKodId.val("+973");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Бахрейн');
            mask_target.text("+973");
            kodId_target.val("+973");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__bd') || $('.allflag').hasClass('iti__bd')) {

            allmaskNom.text("+880");
            allKodId.val("+880");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Бангладеш');
            mask_target.text("+880");
            kodId_target.val("+880");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__bb') || $('.allflag').hasClass('iti__bb')) {

            allmaskNom.text("+1246");
            allKodId.val("+1246");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Барбадос');
            mask_target.text("+1246");
            kodId_target.val("+1246");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__by') || $('.allflag').hasClass('iti__by')) {

            allmaskNom.text("+375");
            allKodId.val("+375");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Белоруссия');
            mask_target.text("+375");
            kodId_target.val("+375");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__bz') || $('.allflag').hasClass('iti__bz')) {
            allmaskNom.text("+501");
            allKodId.val("+501");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Белиз');
            mask_target.text("+501");
            kodId_target.val("+501");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__bj') || $('.allflag').hasClass('iti__bj')) {
            allmaskNom.text("+229");
            allKodId.val("+229");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Бенин');
            mask_target.text("+229");
            kodId_target.val("+229");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__bt') || $('.allflag').hasClass('iti__bt')) {
            allmaskNom.text("+975");
            allKodId.val("+975");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Бутан');
            mask_target.text("+975");
            kodId_target.val("+975");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__bf') || $('.allflag').hasClass('iti__bf')) {
            allmaskNom.text("+226");
            allKodId.val("+226");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Буркина-Фасо');
            mask_target.text("+226");
            kodId_target.val("+226");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__bi') || $('.allflag').hasClass('iti__bi')) {
            allmaskNom.text("+257");
            allKodId.val("+257");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Бурунди');
            mask_target.text("+257");
            kodId_target.val("+257");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__be') || $('.allflag').hasClass('iti__be')) {
            allmaskNom.text("+32");
            allKodId.val("+32");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Бельгия');
            mask_target.text("+32");
            kodId_target.val("+32");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__bg') || $('.allflag').hasClass('iti__bg')) {

            allmaskNom.text("+3");
            allKodId.val("+3");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Болгария');
            mask_target.text("+3");
            kodId_target.val("+3");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__bo') || $('.allflag').hasClass('iti__bo')) {

            allmaskNom.text("+591");
            allKodId.val("+591");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Боливия');
            mask_target.text("+591");
            kodId_target.val("+591");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ba') || $('.allflag').hasClass('iti__ba')) {

            allmaskNom.text("+387");
            allKodId.val("+387");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Босния и Герцеговина');
            mask_target.text("+387");
            kodId_target.val("+387");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__bw') || $('.allflag').hasClass('iti__bw')) {

            allmaskNom.text("+267");
            allKodId.val("+267");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Ботсвана');
            mask_target.text("+267");
            kodId_target.val("+267");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__br') || $('.allflag').hasClass('iti__br')) {

            allmaskNom.text("+55");
            allKodId.val("+55");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Бразилия');
            mask_target.text("+55");
            kodId_target.val("+55");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__bn') || $('.allflag').hasClass('iti__bn')) {

            allmaskNom.text("+673");
            allKodId.val("+673");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Бруней');
            mask_target.text("+673");
            kodId_target.val("+673");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__vu') || $('.allflag').hasClass('iti__vu')) {

            allmaskNom.text("+678");
            allKodId.val("+678");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Вануату');
            mask_target.text("+678");
            kodId_target.val("+678");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__va') || $('.allflag').hasClass('iti__va')) {

            allmaskNom.text("+39");
            allKodId.val("+39");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Ватикан');
            mask_target.text("+39");
            kodId_target.val("+39");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__gb') || $('.allflag').hasClass('iti__gb')) {
            allmaskNom.text("+44");
            allKodId.val("+44");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Великобритания');
            mask_target.text("+44");
            kodId_target.val("+44");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__hu') || $('.allflag').hasClass('iti__hu')) {
            allmaskNom.text("+36");
            allKodId.val("+36");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Венгрия');
            mask_target.text("+36");
            kodId_target.val("+36");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ve') || $('.allflag').hasClass('iti__ve')) {
            allmaskNom.text("+58");
            allKodId.val("+58");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Венесуэла');
            mask_target.text("+58");
            kodId_target.val("+58");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__vn') || $('.allflag').hasClass('iti__vn')) {
            allmaskNom.text("+84");
            allKodId.val("+84");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Вьетнам');
            mask_target.text("+84");
            kodId_target.val("+84");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ga') || $('.allflag').hasClass('iti__ga')) {
            allmaskNom.text("+241");
            allKodId.val("+241");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Габон');
            mask_target.text("+241");
            kodId_target.val("+241");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__gm') || $('.allflag').hasClass('iti__gm')) {
            allmaskNom.text("+220");
            allKodId.val("+220");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Гамбия');
            mask_target.text("+220");
            kodId_target.val("+220");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__gh') || $('.allflag').hasClass('iti__gh')) {
            allmaskNom.text("+233");
            allKodId.val("+233");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Гана');
            mask_target.text("+233");
            kodId_target.val("+233");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__gt') || $('.allflag').hasClass('iti__gt')) {
            allmaskNom.text("+502");
            allKodId.val("+502");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Гватемала');
            mask_target.text("+502");
            kodId_target.val("+502");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__gn') || $('.allflag').hasClass('iti__gn')) {
            allmaskNom.text("+224");
            allKodId.val("+224");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Гвинея');
            mask_target.text("+224");
            kodId_target.val("+224");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__gw') || $('.allflag').hasClass('iti__gw')) {
            allmaskNom.text("+245");
            allKodId.val("+245");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Гвинея-Бисау');
            mask_target.text("+245");
            kodId_target.val("+245");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__de') || $('.allflag').hasClass('iti__de')) {
            allmaskNom.text("+49");
            allKodId.val("+49");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Германия');
            mask_target.text("+49");
            kodId_target.val("+49");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__gr') || $('.allflag').hasClass('iti__gr')) {
            allmaskNom.text("+30");
            allKodId.val("+30");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Греция');
            mask_target.text("+30");
            kodId_target.val("+30");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__gd') || $('.allflag').hasClass('iti__gd')) {
            allmaskNom.text("+30");
            allKodId.val("+30");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Гренада');
            mask_target.text("+30");
            kodId_target.val("+30");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__ge') || $('.allflag').hasClass('iti__ge')) {
            allmaskNom.text("+995");
            allKodId.val("+995");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Грузия');
            mask_target.text("+995");
            kodId_target.val("+995");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__gy') || $('.allflag').hasClass('iti__gy')) {
            allmaskNom.text("+592");
            allKodId.val("+592");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Гайана');
            mask_target.text("+592");
            kodId_target.val("+592");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__ht') || $('.allflag').hasClass('iti__ht')) {
            allmaskNom.text("+509");
            allKodId.val("+509");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Гаити');
            mask_target.text("+509");
            kodId_target.val("+509");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__hn') || $('.allflag').hasClass('iti__hn')) {
            allmaskNom.text("+504");
            allKodId.val("+504");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Гондурас');
            mask_target.text("+504");
            kodId_target.val("+504");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__dk') || $('.allflag').hasClass('iti__dk')) {
            allmaskNom.text("+45");
            allKodId.val("+45");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Дания');
            mask_target.text("+45");
            kodId_target.val("+45");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__dj') || $('.allflag').hasClass('iti__dj')) {
            allmaskNom.text("+253");
            allKodId.val("+253");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Джибути');
            mask_target.text("+253");
            kodId_target.val("+253");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__dm') || $('.allflag').hasClass('iti__dm')) {
            allmaskNom.text("+1767");
            allKodId.val("+1767");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Доминика');
            mask_target.text("+1767");
            kodId_target.val("+1767");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__do') || $('.allflag').hasClass('iti__do')) {
            allmaskNom.text("+1");
            allKodId.val("+1");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Доминика');
            mask_target.text("+1");
            kodId_target.val("+1");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__cd') || $('.allflag').hasClass('iti__cd')) {
            allmaskNom.text("+243");
            allKodId.val("+243");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'ДР Конго');
            mask_target.text("+243");
            kodId_target.val("+243");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__eg') || $('.allflag').hasClass('iti__eg')) {
            allmaskNom.text("+20");
            allKodId.val("+20");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Египет');
            mask_target.text("+20");
            kodId_target.val("+20");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__zm') || $('.allflag').hasClass('iti__zm')) {
            allmaskNom.text("+260");
            allKodId.val("+260");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Замбия');
            mask_target.text("+260");
            kodId_target.val("+260");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__zw') || $('.allflag').hasClass('iti__zw')) {
            allmaskNom.text("+263");
            allKodId.val("+263");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Зимбабве');
            mask_target.text("+263");
            kodId_target.val("+263");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__il') || $('.allflag').hasClass('iti__il')) {
            allmaskNom.text("+972");
            allKodId.val("+972");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Израиль');
            mask_target.text("+972");
            kodId_target.val("+972");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__in') || $('.allflag').hasClass('iti__in')) {
            allmaskNom.text("+91");
            allKodId.val("+91");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Индия');
            mask_target.text("+91");
            kodId_target.val("+91");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__id') || $('.allflag').hasClass('iti__id')) {
            allmaskNom.text("+62");
            allKodId.val("+62");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Индонезия');
            mask_target.text("+62");
            kodId_target.val("+62");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__jo') || $('.allflag').hasClass('iti__jo')) {
            allmaskNom.text("+962");
            allKodId.val("+962");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Иордания');
            mask_target.text("+962");
            kodId_target.val("+962");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ir') || $('.allflag').hasClass('iti__ir')) {
            allmaskNom.text("+98");
            allKodId.val("+98");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Иран');
            mask_target.text("+98");
            kodId_target.val("+98");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__iq') || $('.allflag').hasClass('iti__iq')) {
            allmaskNom.text("+964");
            allKodId.val("+964");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Ирак');
            mask_target.text("+964");
            kodId_target.val("+964");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__ie') || $('.allflag').hasClass('iti__ie')) {
            allmaskNom.text("+353");
            allKodId.val("+353");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Ирландия');
            mask_target.text("+353");
            kodId_target.val("+353");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__is') || $('.allflag').hasClass('iti__is')) {
            allmaskNom.text("+354");
            allKodId.val("+354");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Исландия');
            mask_target.text("+354");
            kodId_target.val("+354");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__es') || $('.allflag').hasClass('iti__es')) {
            allmaskNom.text("+34");
            allKodId.val("+34");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Испания');
            mask_target.text("+34");
            kodId_target.val("+34");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__it') || $('.allflag').hasClass('iti__it')) {

            allmaskNom.text("+39");
            allKodId.val("+39");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Италия');
            mask_target.text("+39");
            kodId_target.val("+39");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__ye') || $('.allflag').hasClass('iti__ye')) {

            allmaskNom.text("+967");
            allKodId.val("+967");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}')
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Йемен');
            mask_target.text("+967");
            kodId_target.val("+967");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__cv') || $('.allflag').hasClass('iti__cv')) {
            allmaskNom.text("+238");
            allKodId.val("+238");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Кабо-Верде');
            mask_target.text("+238");
            kodId_target.val("+238");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__kz') || $('.allflag').hasClass('iti__kz')) {
            allmaskNom.text("+7");
            allKodId.val("+7");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Казахстан');
            mask_target.text("+7");
            kodId_target.val("+7");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__kh') || $('.allflag').hasClass('iti__kh')) {
            allmaskNom.text("+855");
            allKodId.val("+855");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Камбоджа');
            mask_target.text("+855");
            kodId_target.val("+855");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__cm') || $('.allflag').hasClass('iti__cm')) {
            allmaskNom.text("+237");
            allKodId.val("+237");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Камерун');
            mask_target.text("+237");
            kodId_target.val("+237");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ca') || $('.allflag').hasClass('iti__ca')) {
            allmaskNom.text("+1");
            allKodId.val("+1");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Канада');
            mask_target.text("+1");
            kodId_target.val("+1");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__qa') || $('.allflag').hasClass('iti__qa')) {
            allmaskNom.text("+974");
            allKodId.val("+974");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Катар');
            mask_target.text("+974");
            kodId_target.val("+974");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ke') || $('.allflag').hasClass('iti__ke')) {
            allmaskNom.text("+254");
            allKodId.val("+254");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Кения');
            mask_target.text("+254");
            kodId_target.val("+254");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__cy') || $('.allflag').hasClass('iti__cy')) {
            allmaskNom.text("+357");
            allKodId.val("+357");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Кипр');
            mask_target.text("+357");
            kodId_target.val("+357");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__kg') || $('.allflag').hasClass('iti__kg')) {
            allmaskNom.text("+996");
            allKodId.val("+996");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Киргизия');
            mask_target.text("+996");
            kodId_target.val("+996");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ki') || $('.allflag').hasClass('iti__ki')) {
            allmaskNom.text("+686");
            allKodId.val("+686");
            allphone.attr('maxlength', '5');
            allphone.attr('pattern', '[0-9]{5}');
            allphone.attr('placeholder', '123 45');
            inpCnt_target.attr('value', 'Кирибати');
            mask_target.text("+686");
            kodId_target.val("+686");
            tel1_target.attr('maxlength', '5');
            tel1_target.attr('pattern', '[0-9]{5}');
            tel1_target.attr('placeholder', '123 45');
            return;
        }
        if (flag_target.hasClass('iti__cn') || $('.allflag').hasClass('iti__cn')) {
            allmaskNom.text("+86");
            allKodId.val("+86");
            allphone.attr('maxlength', '11');
            allphone.attr('pattern', '[0-9]{11}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Китай');
            mask_target.text("+86");
            kodId_target.val("+86");
            tel1_target.attr('maxlength', '11');
            tel1_target.attr('pattern', '[0-9]{11}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__co') || $('.allflag').hasClass('iti__co')) {
            allmaskNom.text("+57");
            allKodId.val("+57");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Колумбия');
            mask_target.text("+57");
            kodId_target.val("+57");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__km') || $('.allflag').hasClass('iti__km')) {
            allmaskNom.text("+269");
            allKodId.val("+269");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Коморы');
            mask_target.text("+269");
            kodId_target.val("+269");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__cg') || $('.allflag').hasClass('iti__cg')) {
            allmaskNom.text("+242");
            allKodId.val("+242");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Конго');
            mask_target.text("+242");
            kodId_target.val("+242");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ck') || $('.allflag').hasClass('iti__ck')) {
            allmaskNom.text("+506");
            allKodId.val("+506");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Коста-Рика');
            mask_target.text("+506");
            kodId_target.val("+506");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ci') || $('.allflag').hasClass('iti__ci')) {
            allmaskNom.text("+225");
            allKodId.val("+225");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', "Кот-д'Ивуар");
            mask_target.text("+225");
            kodId_target.val("+225");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__cu') || $('.allflag').hasClass('iti__cu')) {
            allmaskNom.text("+53");
            allKodId.val("+53");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Куба');
            mask_target.text("+53");
            kodId_target.val("+53");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__kw') || $('.allflag').hasClass('iti__kw')) {
            allmaskNom.text("+965");
            allKodId.val("+965");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Кувейт');
            mask_target.text("+965");
            kodId_target.val("+965");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__la') || $('.allflag').hasClass('iti__la')) {
            allmaskNom.text("+856");
            allKodId.val("+856");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Лаос');
            mask_target.text("+856");
            kodId_target.val("+856");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__lv') || $('.allflag').hasClass('iti__lv')) {
            allmaskNom.text("+371");
            allKodId.val("+371");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Латвия');
            mask_target.text("+371");
            kodId_target.val("+371");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ls') || $('.allflag').hasClass('iti__ls')) {
            allmaskNom.text("+266");
            allKodId.val("+266");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Лесото');
            mask_target.text("+266");
            kodId_target.val("+266");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__lr') || $('.allflag').hasClass('iti__lr')) {
            allmaskNom.text("+231");
            allKodId.val("+231");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Либерия');
            mask_target.text("+231");
            kodId_target.val("+231");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ly') || $('.allflag').hasClass('iti__ly')) {
            allmaskNom.text("+218");
            allKodId.val("+218");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Ливия');
            mask_target.text("+218");
            kodId_target.val("+218");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__lb') || $('.allflag').hasClass('iti__lb')) {
            allmaskNom.text("+961");
            allKodId.val("+961");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Ливан');
            mask_target.text("+961");
            kodId_target.val("+961");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__lt') || $('.allflag').hasClass('iti__lt')) {
            allmaskNom.text("+370");
            allKodId.val("+370");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Литва');
            mask_target.text("+370");
            kodId_target.val("+370");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__li') || $('.allflag').hasClass('iti__li')) {
            allmaskNom.text("+423");
            allKodId.val("+423");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Лихтенштейн');
            mask_target.text("+423");
            kodId_target.val("+423");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__lu') || $('.allflag').hasClass('iti__lu')) {
            allmaskNom.text("+352");
            allKodId.val("+352");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Люксембург');
            mask_target.text("+352");
            kodId_target.val("+352");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__mr') || $('.allflag').hasClass('iti__mr')) {
            allmaskNom.text("+222");
            allKodId.val("+222");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мавритания');
            mask_target.text("+222");
            kodId_target.val("+222");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mr') || $('.allflag').hasClass('iti__mr')) {
            allmaskNom.text("+222");
            allKodId.val("+222");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мадагаскар');
            mask_target.text("+222");
            kodId_target.val("+222");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mg') || $('.allflag').hasClass('iti__mg')) {
            allmaskNom.text("+261");
            allKodId.val("+261");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Мадагаскар');
            mask_target.text("+261");
            kodId_target.val("+261");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__mk') || $('.allflag').hasClass('iti__mk')) {
            allmaskNom.text("+389");
            allKodId.val("+389");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Македония');
            mask_target.text("+389");
            kodId_target.val("+389");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mw') || $('.allflag').hasClass('iti__mw')) {
            allmaskNom.text("+265");
            allKodId.val("+265");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Малави');
            mask_target.text("+265");
            kodId_target.val("+265");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__my') || $('.allflag').hasClass('iti__my')) {
            allmaskNom.text("+60");
            allKodId.val("+60");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Малайзия');
            mask_target.text("+60");
            kodId_target.val("+60");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ml') || $('.allflag').hasClass('iti__ml')) {
            allmaskNom.text("+223");
            allKodId.val("+223");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мали');
            mask_target.text("+223");
            kodId_target.val("+223");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mv') || $('.allflag').hasClass('iti__mv')) {
            allmaskNom.text("+960");
            allKodId.val("+960");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Мальдивы');
            mask_target.text("+960");
            kodId_target.val("+960");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__mt') || $('.allflag').hasClass('iti__mt')) {
            allmaskNom.text("+356");
            allKodId.val("+356");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мальта');
            mask_target.text("+356");
            kodId_target.val("+356");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ma') || $('.allflag').hasClass('iti__ma')) {
            allmaskNom.text("+212");
            allKodId.val("+212");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Марокко');
            mask_target.text("+212");
            kodId_target.val("+212");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__mh') || $('.allflag').hasClass('iti__mh')) {
            allmaskNom.text("+692");
            allKodId.val("+692");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Маршалловы о-ва');
            mask_target.text("+692");
            kodId_target.val("+692");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__mx') || $('.allflag').hasClass('iti__mx')) {
            allmaskNom.text("+52");
            allKodId.val("+52");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Мексика');
            mask_target.text("+52");
            kodId_target.val("+52");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__fm') || $('.allflag').hasClass('iti__fm')) {
            allmaskNom.text("+691");
            allKodId.val("+691");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Микронезия');
            mask_target.text("+691");
            kodId_target.val("+691");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__md') || $('.allflag').hasClass('iti__md')) {
            allmaskNom.text("+373");
            allKodId.val("+373");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Молдавия');
            mask_target.text("+373");
            kodId_target.val("+373");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mc') || $('.allflag').hasClass('iti__mc')) {
            allmaskNom.text("+377");
            allKodId.val("+377");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Монако');
            mask_target.text("+377");
            kodId_target.val("+377");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mn') || $('.allflag').hasClass('iti__mn')) {
            allmaskNom.text("+976");
            allKodId.val("+976");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Монголия');
            mask_target.text("+976");
            kodId_target.val("+976");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mz') || $('.allflag').hasClass('iti__mz')) {
            allmaskNom.text("+258");
            allKodId.val("+258");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мозамбик');
            mask_target.text("+258");
            kodId_target.val("+258");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__mm') || $('.allflag').hasClass('iti__mm')) {
            allmaskNom.text("+95");
            allKodId.val("+95");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Мьянма');
            mask_target.text("+95");
            kodId_target.val("+95");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__na') || $('.allflag').hasClass('iti__na')) {
            allmaskNom.text("+264");
            allKodId.val("+264");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Намибия');
            mask_target.text("+264");
            kodId_target.val("+264");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__nr') || $('.allflag').hasClass('iti__nr')) {
            allmaskNom.text("+674");
            allKodId.val("+674");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Науру');
            mask_target.text("+674");
            kodId_target.val("+674");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__np') || $('.allflag').hasClass('iti__np')) {
            allmaskNom.text("+977");
            allKodId.val("+977");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Непал');
            mask_target.text("+977");
            kodId_target.val("+977");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ne') || $('.allflag').hasClass('iti__ne')) {
            allmaskNom.text("+227");
            allKodId.val("+227");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Нигер');
            mask_target.text("+227");
            kodId_target.val("+227");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ng') || $('.allflag').hasClass('iti__ng')) {
            allmaskNom.text("+234");
            allKodId.val("+234");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Нигерия');
            mask_target.text("+234");
            kodId_target.val("+234");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__nu') || $('.allflag').hasClass('iti__nu')) {
            allmaskNom.text("+683");
            allKodId.val("+683");
            allphone.attr('maxlength', '4');
            allphone.attr('pattern', '[0-9]{4}');
            allphone.attr('placeholder', '1234');
            inpCnt_target.attr('value', 'Ниуэ');
            mask_target.text("+683");
            kodId_target.val("+683");
            tel1_target.attr('maxlength', '4');
            tel1_target.attr('pattern', '[0-9]{4}');
            tel1_target.attr('placeholder', '1234');
            return;
        }
        if (flag_target.hasClass('iti__nl') || $('.allflag').hasClass('iti__nl')) {
            allmaskNom.text("+31");
            allKodId.val("+31");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Нидерланды');
            mask_target.text("+31");
            kodId_target.val("+31");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ni') || $('.allflag').hasClass('iti__ni')) {
            allmaskNom.text("+505");
            allKodId.val("+505");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Никарагуа');
            mask_target.text("+505");
            kodId_target.val("+505");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__nz') || $('.allflag').hasClass('iti__nz')) {
            allmaskNom.text("+64");
            allKodId.val("+64");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Новая Зеландия');
            mask_target.text("+64");
            kodId_target.val("+64");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__no') || $('.allflag').hasClass('iti__no')) {
            allmaskNom.text("+47");
            allKodId.val("+47");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Норвегия');
            mask_target.text("+47");
            kodId_target.val("+47");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ae') || $('.allflag').hasClass('iti__ae')) {
            allmaskNom.text("+971");
            allKodId.val("+971");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Объединенные Арабские Эмираты');
            mask_target.text("+971");
            kodId_target.val("+971");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__om') || $('.allflag').hasClass('iti__om')) {
            allmaskNom.text("+968");
            allKodId.val("+968");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Оман');
            mask_target.text("+968");
            kodId_target.val("+968");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ck') || $('.allflag').hasClass('iti__ck')) {
            allmaskNom.text("+682");
            allKodId.val("+682");
            allphone.attr('maxlength', '5');
            allphone.attr('pattern', '[0-9]{5}');
            allphone.attr('placeholder', '123 45');
            inpCnt_target.attr('value', 'Острова Кука');
            mask_target.text("+682");
            kodId_target.val("+682");
            tel1_target.attr('maxlength', '5');
            tel1_target.attr('pattern', '[0-9]{5}');
            tel1_target.attr('placeholder', '123 45');
            return;
        }
        if (flag_target.hasClass('iti__mu') || $('.allflag').hasClass('iti__mu')) {
            allmaskNom.text("+230");
            allKodId.val("+230");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Остров Маврикий');
            mask_target.text("+230");
            kodId_target.val("+230");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__pk') || $('.allflag').hasClass('iti__pk')) {

            allmaskNom.text("+92");
            allKodId.val("+92");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Пакистан');
            mask_target.text("+92");
            kodId_target.val("+92");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__pw') || $('.allflag').hasClass('iti__pw')) {

            allmaskNom.text("+680");
            allKodId.val("+680");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Палау');
            mask_target.text("+680");
            kodId_target.val("+680");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__ps') || $('.allflag').hasClass('iti__ps')) {

            allmaskNom.text("+970");
            allKodId.val("+970");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Палестина');
            mask_target.text("+970");
            kodId_target.val("+970");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__pg') || $('.allflag').hasClass('iti__pg')) {

            allmaskNom.text("+675");
            allKodId.val("+675");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Папуа-Новая Гвинея');
            mask_target.text("+675");
            kodId_target.val("+675");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__py') || $('.allflag').hasClass('iti__py')) {

            allmaskNom.text("+595");
            allKodId.val("+595");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Парагвай');
            mask_target.text("+595");
            kodId_target.val("+595");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__pe') || $('.allflag').hasClass('iti__pe')) {

            allmaskNom.text("+51");
            allKodId.val("+51");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Перу');
            mask_target.text("+51");
            kodId_target.val("+51");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__pl') || $('.allflag').hasClass('iti__pl')) {

            allmaskNom.text("+48");
            allKodId.val("+48");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Польша');
            mask_target.text("+48");
            kodId_target.val("+48");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__pt') || $('.allflag').hasClass('iti__pt')) {
            allmaskNom.text("+351");
            allKodId.val("+351");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 89');
            inpCnt_target.attr('value', 'Португалия');
            mask_target.text("+351");
            kodId_target.val("+351");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 89');
            return;
        }
        if (flag_target.hasClass('iti__ru') || $('.allflag').hasClass('iti__ru')) {

            allmaskNom.text("+7");
            allKodId.val("+7");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[9][0-9]{9}');
            allphone.attr('placeholder', '123 456 78 90');
            mask_target.text("+7");
            kodId_target.attr('value', '+7');
            inpCnt_target.attr('value', 'Россия');
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[9][0-9]{9}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__rw') || $('.allflag').hasClass('iti__rw')) {
            allmaskNom.text("+250");
            allKodId.val("+250");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Руанда');
            mask_target.text("+250");
            kodId_target.val("+250");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ro') || $('.allflag').hasClass('iti__ro')) {
            allmaskNom.text("+40");
            allKodId.val("+40");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Румыния');
            mask_target.text("+40");
            kodId_target.val("+40");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__sv') || $('.allflag').hasClass('iti__sv')) {
            allmaskNom.text("+503");
            allKodId.val("+503");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Сальвадор');
            mask_target.text("+503");
            kodId_target.val("+503");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ws') || $('.allflag').hasClass('iti__ws')) {
            allmaskNom.text("+685");
            allKodId.val("+685");
            allphone.attr('maxlength', '6');
            allphone.attr('pattern', '[0-9]{6}');
            allphone.attr('placeholder', '123 456');
            inpCnt_target.attr('value', 'Самоа');
            mask_target.text("+685");
            kodId_target.val("+685");
            tel1_target.attr('maxlength', '6');
            tel1_target.attr('pattern', '[0-9]{6}');
            tel1_target.attr('placeholder', '123 456');
            return;
        }
        if (flag_target.hasClass('iti__sm') || $('.allflag').hasClass('iti__sm')) {
            allmaskNom.text("+378");
            allKodId.val("+378");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Сан-Марино');
            mask_target.text("+378");
            kodId_target.val("+378");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__st') || $('.allflag').hasClass('iti__st')) {
            allmaskNom.text("+239");
            allKodId.val("+239");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Сан-Томе и Принсипи');
            mask_target.text("+239");
            kodId_target.val("+239");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__sa') || $('.allflag').hasClass('iti__sa')) {
            allmaskNom.text("+966");
            allKodId.val("+966");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Саудовская Аравия');
            mask_target.text("+966");
            kodId_target.val("+966");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__kp') || $('.allflag').hasClass('iti__kp')) {
            allmaskNom.text("+850");
            allKodId.val("+850");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Северная Корея');
            mask_target.text("+850");
            kodId_target.val("+850");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__sc') || $('.allflag').hasClass('iti__sc')) {
            allmaskNom.text("+248");
            allKodId.val("+248");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Сейшелы');
            mask_target.text("+248");
            kodId_target.val("+248");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__sn') || $('.allflag').hasClass('iti__sn')) {
            allmaskNom.text("+221");
            allKodId.val("+221");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Сенегал');
            mask_target.text("+221");
            kodId_target.val("+221");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__vc') || $('.allflag').hasClass('iti__vc')) {
            allmaskNom.text("+1784");
            allKodId.val("+1784");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Сент-Винсент и Гренадины');
            mask_target.text("+1784");
            kodId_target.val("+1784");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__kn') || $('.allflag').hasClass('iti__kn')) {
            allmaskNom.text("+1869");
            allKodId.val("+1869");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Сент-Китс и Невис');
            mask_target.text("+1869");
            kodId_target.val("+1869");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__lc') || $('.allflag').hasClass('iti__lc')) {
            allmaskNom.text("+1758");
            allKodId.val("+1758");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Сент-Люсия');
            mask_target.text("+1758");
            kodId_target.val("+1758");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__rs') || $('.allflag').hasClass('iti__rs')) {
            allmaskNom.text("+381");
            allKodId.val("+381");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Сербия');
            mask_target.text("+381");
            kodId_target.val("+381");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__sg') || $('.allflag').hasClass('iti__sg')) {
            allmaskNom.text("+65");
            allKodId.val("+65");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Сингапур');
            mask_target.text("+65");
            kodId_target.val("+65");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__sy') || $('.allflag').hasClass('iti__sy')) {
            allmaskNom.text("+963");
            allKodId.val("+963");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Сирия');
            mask_target.text("+963");
            kodId_target.val("+963");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__sk') || $('.allflag').hasClass('iti__sk')) {

            allmaskNom.text("+421");
            allKodId.val("+421");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Словакия');
            mask_target.text("+421");
            kodId_target.val("+421");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__si') || $('.allflag').hasClass('iti__si')) {
            allmaskNom.text("+386");
            allKodId.val("+386");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Словения');
            mask_target.text("+386");
            kodId_target.val("+386");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__us') || $('.allflag').hasClass('iti__us')) {
            allmaskNom.text("+1");
            allKodId.val("+1");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Соединенные Штаты Америки');
            mask_target.text("+1");
            kodId_target.val("+1");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__sb') || $('.allflag').hasClass('iti__sb')) {
            allmaskNom.text("+677");
            allKodId.val("+677");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Соломоновы о-ва');
            mask_target.text("+677");
            kodId_target.val("+677");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__so') || $('.allflag').hasClass('iti__so')) {
            allmaskNom.text("+252");
            allKodId.val("+252");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Сомали');
            mask_target.text("+252");
            kodId_target.val("+252");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__sd') || $('.allflag').hasClass('iti__sd')) {
            allmaskNom.text("+249");
            allKodId.val("+249");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Судан');
            mask_target.text("+249");
            kodId_target.val("+249");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__sr') || $('.allflag').hasClass('iti__sr')) {
            allmaskNom.text("+597");
            allKodId.val("+597");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Суринам');
            mask_target.text("+597");
            kodId_target.val("+597");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__sl') || $('.allflag').hasClass('iti__sl')) {
            allmaskNom.text("+232");
            allKodId.val("+232");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Сьерра-Леоне');
            mask_target.text("+232");
            kodId_target.val("+232");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__tj') || $('.allflag').hasClass('iti__tj')) {
            allmaskNom.text("+992");
            allKodId.val("+992");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Таджикистан');
            mask_target.text("+992");
            kodId_target.val("+992");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__th') || $('.allflag').hasClass('iti__th')) {
            allmaskNom.text("+66");
            allKodId.val("+66");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Таиланд');
            mask_target.text("+66");
            kodId_target.val("+66");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__tw') || $('.allflag').hasClass('iti__tw')) {
            allmaskNom.text("+886");
            allKodId.val("+886");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Тайвань');
            mask_target.text("+886");
            kodId_target.val("+886");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__tz') || $('.allflag').hasClass('iti__tz')) {
            allmaskNom.text("+255");
            allKodId.val("+255");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Танзания');
            mask_target.text("+255");
            kodId_target.val("+255");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__tg') || $('.allflag').hasClass('iti__tg')) {
            allmaskNom.text("+228");
            allKodId.val("+228");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Того');
            mask_target.text("+228");
            kodId_target.val("+228");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__to') || $('.allflag').hasClass('iti__to')) {
            allmaskNom.text("+676");
            allKodId.val("+676");
            allphone.attr('maxlength', '5');
            allphone.attr('pattern', '[0-9]{5}')
            allphone.attr('placeholder', '123 45');
            inpCnt_target.attr('value', 'Тонга');
            mask_target.text("+676");
            kodId_target.val("+676");
            tel1_target.attr('maxlength', '5');
            tel1_target.attr('pattern', '[0-9]{5}');
            tel1_target.attr('placeholder', '123 45');
            return;
        }
        if (flag_target.hasClass('iti__tt') || $('.allflag').hasClass('iti__tt')) {
            allmaskNom.text("+1868");
            allKodId.val("+1868");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Тринидад и Тобаго');
            mask_target.text("+1868");
            kodId_target.val("+1868");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__tv') || $('.allflag').hasClass('iti__tv')) {
            allmaskNom.text("+688");
            allKodId.val("+688");
            allphone.attr('maxlength', '6');
            allphone.attr('pattern', '[0-9]{6}')
            allphone.attr('placeholder', '123 456');
            inpCnt_target.attr('value', 'Тувалу');
            mask_target.text("+688");
            kodId_target.val("+688");
            tel1_target.attr('maxlength', '6');
            tel1_target.attr('pattern', '[0-9]{6}');
            tel1_target.attr('placeholder', '123 456');
            return;
        }
        if (flag_target.hasClass('iti__tn') || $('.allflag').hasClass('iti__tn')) {
            allmaskNom.text("+216");
            allKodId.val("+216");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Тунис');
            mask_target.text("+216");
            kodId_target.val("+216");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__tm') || $('.allflag').hasClass('iti__tm')) {
            allmaskNom.text("+993");
            allKodId.val("+993");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Туркменистан');
            mask_target.text("+993");
            kodId_target.val("+993");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__tr') || $('.allflag').hasClass('iti__tr')) {
            allmaskNom.text("+90");
            allKodId.val("+90");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Турция');
            mask_target.text("+90");
            kodId_target.val("+90");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__ug') || $('.allflag').hasClass('iti__ug')) {
            allmaskNom.text("+256");
            allKodId.val("+256");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Уганда');
            mask_target.text("+256");
            kodId_target.val("+256");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__uz') || $('.allflag').hasClass('iti__uz')) {
            allmaskNom.text("+998");
            allKodId.val("+998");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Узбекистан');
            mask_target.text("+998");
            kodId_target.val("+998");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__uy') || $('.allflag').hasClass('iti__uy')) {
            allmaskNom.text("+598");
            allKodId.val("+598");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Уругвай');
            mask_target.text("+598");
            kodId_target.val("+598");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ua') || $('.allflag').hasClass('iti__ua')) {
            allmaskNom.text("+380");
            allKodId.val("+380");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Украина');
            mask_target.text("+380");
            kodId_target.val("+380");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__fj') || $('.allflag').hasClass('iti__fj')) {
            allmaskNom.text("+679");
            allKodId.val("+679");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Фиджи');
            mask_target.text("+679");
            kodId_target.val("+679");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ph') || $('.allflag').hasClass('iti__ph')) {

            allmaskNom.text("+63");
            allKodId.val("+63");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Филиппины');
            mask_target.text("+63");
            kodId_target.val("+63");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__fi') || $('.allflag').hasClass('iti__fi')) {
            allmaskNom.text("+358");
            allKodId.val("+358");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Финляндия');
            mask_target.text("+358");
            kodId_target.val("+358");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__fr') || $('.allflag').hasClass('iti__fr')) {
            allmaskNom.text("+33");
            allKodId.val("+33");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Франция');
            mask_target.text("+33");
            kodId_target.val("+33");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');

            return;
        }
        if (flag_target.hasClass('iti__hr') || $('.allflag').hasClass('iti__hr')) {
            allmaskNom.text("+385");
            allKodId.val("+385");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Хорватия');
            mask_target.text("+385");
            kodId_target.val("+385");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__cf') || $('.allflag').hasClass('iti__cf')) {
            allmaskNom.text("+236");
            allKodId.val("+236");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Центральноафриканская Республика');
            mask_target.text("+236");
            kodId_target.val("+236");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__td') || $('.allflag').hasClass('iti__td')) {
            allmaskNom.text("+235");
            allKodId.val("+235");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Чад');
            mask_target.text("+235");
            kodId_target.val("+235");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__cl') || $('.allflag').hasClass('iti__cl')) {
            allmaskNom.text("+56");
            allKodId.val("+56");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Чили');
            mask_target.text("+56");
            kodId_target.val("+56");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__me') || $('.allflag').hasClass('iti__me')) {

            allmaskNom.text("+382");
            allKodId.val("+382");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Черногория');
            mask_target.text("+382");
            kodId_target.val("+382");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__cz') || $('.allflag').hasClass('iti__cz')) {
            allmaskNom.text("+420");
            allKodId.val("+420");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Чехия');
            mask_target.text("+420");
            kodId_target.val("+420");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ch') || $('.allflag').hasClass('iti__ch')) {
            allmaskNom.text("+41");
            allKodId.val("+41");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Швейцария');
            mask_target.text("+41");
            kodId_target.val("+41");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__se') || $('.allflag').hasClass('iti__se')) {
            allmaskNom.text("+46");
            allKodId.val("+46");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Швеция');
            mask_target.text("+46");
            kodId_target.val("+46");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__lk') || $('.allflag').hasClass('iti__lk')) {
            allmaskNom.text("+94");
            allKodId.val("+94");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Шри-Ланка');
            mask_target.text("+94");
            kodId_target.val("+94");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__ec') || $('.allflag').hasClass('iti__ec')) {
            allmaskNom.text("+593");
            allKodId.val("+593");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}');
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Эквадор');
            mask_target.text("+593");
            kodId_target.val("+593");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__gq') || $('.allflag').hasClass('iti__gq')) {
            allmaskNom.text("+240");
            allKodId.val("+240");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Экваториальная Гвинея');
            mask_target.text("+240");
            kodId_target.val("+240");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__er') || $('.allflag').hasClass('iti__er')) {
            allmaskNom.text("+291");
            allKodId.val("+291");
            allphone.attr('maxlength', '7');
            allphone.attr('pattern', '[0-9]{7}');
            allphone.attr('placeholder', '123 456 7');
            inpCnt_target.attr('value', 'Эритрея');
            mask_target.text("+291");
            kodId_target.val("+291");
            tel1_target.attr('maxlength', '7');
            tel1_target.attr('pattern', '[0-9]{7}');
            tel1_target.attr('placeholder', '123 456 7');
            return;
        }
        if (flag_target.hasClass('iti__sz') || $('.allflag').hasClass('iti__sz')) {
            allmaskNom.text("+258");
            allKodId.val("+258");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Эсватини');
            mask_target.text("+258");
            kodId_target.val("+258");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__ee') || $('.allflag').hasClass('iti__ee')) {
            allmaskNom.text("+372");
            allKodId.val("+372");
            allphone.attr('maxlength', '8');
            allphone.attr('pattern', '[0-9]{8}')
            allphone.attr('placeholder', '123 456 78');
            inpCnt_target.attr('value', 'Эстония');
            mask_target.text("+372");
            kodId_target.val("+372");
            tel1_target.attr('maxlength', '8');
            tel1_target.attr('pattern', '[0-9]{8}');
            tel1_target.attr('placeholder', '123 456 78');
            return;
        }
        if (flag_target.hasClass('iti__et') || $('.allflag').hasClass('iti__et')) {
            allmaskNom.text("+251");
            allKodId.val("+251");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}')
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Эфиопия');
            mask_target.text("+251");
            kodId_target.val("+251");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__za') || $('.allflag').hasClass('iti__za')) {
            allmaskNom.text("+27");
            allKodId.val("+27");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Южная Африка');
            mask_target.text("+27");
            kodId_target.val("+27");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__kr') || $('.allflag').hasClass('iti__kr')) {
            allmaskNom.text("+82");
            allKodId.val("+82");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Южная Корея');
            mask_target.text("+82");
            kodId_target.val("+82");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__ss') || $('.allflag').hasClass('iti__ss')) {
            allmaskNom.text("+211");
            allKodId.val("+211");
            allphone.attr('maxlength', '9');
            allphone.attr('pattern', '[0-9]{9}');
            allphone.attr('placeholder', '123 456 789');
            inpCnt_target.attr('value', 'Южный Судан');
            mask_target.text("+211");
            kodId_target.val("+211");
            tel1_target.attr('maxlength', '9');
            tel1_target.attr('pattern', '[0-9]{9}');
            tel1_target.attr('placeholder', '123 456 789');
            return;
        }
        if (flag_target.hasClass('iti__jm') || $('.allflag').hasClass('iti__jm')) {
            allmaskNom.text("+1");
            allKodId.val("+1");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Ямайка');
            mask_target.text("+1");
            kodId_target.val("+1");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
        if (flag_target.hasClass('iti__jp') || $('.allflag').hasClass('iti__jp')) {
            allmaskNom.text("+81");
            allKodId.val("+81");
            allphone.attr('maxlength', '10');
            allphone.attr('pattern', '[0-9]{10}');
            allphone.attr('placeholder', '123 456 78 90');
            inpCnt_target.attr('value', 'Япония');
            mask_target.text("+81");
            kodId_target.val("+81");
            tel1_target.attr('maxlength', '10');
            tel1_target.attr('pattern', '[0-9]{10}');
            tel1_target.attr('placeholder', '123 456 78 90');
            return;
        }
    }
});