﻿Bridge.merge(new Bridge.CultureInfo("es-PE", true), {
    englishName: "Spanish (Peru)",
    nativeName: "español (Perú)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NeuN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinito",
        positiveInfinitySymbol: "Infinito",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "S/.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 12,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dom","lun","mar","mié","jue","vie","sáb"],
        abbreviatedMonthGenitiveNames: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""],
        abbreviatedMonthNames: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd' de 'MMMM' de 'yyyy hh:mm:ss tt",
        longDatePattern: "dddd, dd' de 'MMMM' de 'yyyy",
        longTimePattern: "hh:mm:ss tt",
        monthDayPattern: "d' de 'MMMM",
        monthGenitiveNames: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
        monthNames: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["do","lu","ma","mi","ju","vi","sá"],
        shortTimePattern: "hh:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM' de 'yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
