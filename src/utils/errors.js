let obj = {
  functionName: '',
  logger: '',
  errorCode: '',
  messageError: '',
  message: ''
};

function objError(logStr) {
  obj['message'] = logStr;
  obj['logger'].error(logStr);
  return {
    codeACE2CICS: obj['errorCode'],
    message: obj['message']
  };
}

async function cicsErrors(response, logger, functionName) {
  const errorCode = (response.body['COD-ERR']).toString();
  const messageError = response.body['MSG-ERR'];
  obj['functionName'] = functionName;
  obj['logger'] = logger;
  obj['errorCode'] = errorCode;
  obj['messageError'] = messageError;

  switch (errorCode) {
    case '001':
      return objError(`MANTIENE GARANTIA`);
    case '002':
      return objError(`MANTIENE CTA.ESP.`);
    case '003':
      return objError(`CUENTA BIPERSONAL`);
    case '004':
      return objError(`CUENTA CERRADA`);
    case '005':
      return objError(`TIENE ORDEN NO PAGO`);
    case '006':
      return objError(`CTA. EN OBSERVACION`);
    case '007':
      return objError(`ABIERTA ESTE MES`);
    case '008':
      return objError(`REGISTRA PROTESTO`);
    case '009':
      return objError(`PROTESTO ACLARADO`);
    case '010':
      return objError(`NOTIF. DE EMBARGO`);
    case '011':
      return objError(`TIENE ANT. LEGALES`);
    case '012':
      return objError(`DOCUMENTO VIGENTE`);
    case '013':
      return objError(`DOC. YA ANULADO`);
    case '014':
      return objError(`DOC. YA CANCELADO`);
    case '015':
      return objError(`TIENE DUPLICADO`);
    case '016':
      return objError(`DOC. NO CONFIRMADO`);
    case '017':
      return objError(`AUT. OPERAR C.AUT`);
    case '018':
      return objError(`TITULAR FALLECIDO`);
    case '019':
      return objError(`CTA.CERRADA BANCO`);
    case '020':
      return objError(`ORDEN DE CIERRE`);
    case '021':
      return objError(`VERIFICAR DIRECCION`);
    case '022':
      return objError(`PERSONA JURIDICA`);
    case '023':
      return objError(`ENTIDAD OFICIAL`);
    case '024':
      return objError(`REQUIERE DOS FIRMAS`);
    case '025':
      return objError(`CODIGO ERRADO`);
    case '026':
      return objError(`FORMATO ERRADO`);
    case '027':
      return objError(`NUM.DOCTO. INVALIDO`);
    case '028':
      return objError(`SE SOBREGIRARIA`);
    case '029':
      return objError(`INSUFIC.SALDO DISP.`);
    case '030':
      return objError(`CANT.CHEQUES ERRADA`);
    case '031':
      return objError(`CREARIA SALDO NEG.`);
    case '032':
      return objError(`CREA RETENCION NEG.`);
    case '033':
      return objError(`SOBREGIRA BLOQUEO`);
    case '034':
      return objError(`CREARIA LIMITE NEG.`);
    case '035':
      return objError(`MONTO MENOR EFECT.`);
    case '036':
      return objError(`BAL. LIBRETA ERRADO`);
    case '037':
      return objError(`NRO. CUENTA ERRADO`);
    case '038':
      return objError(`CUENTA YA ABIERTA`);
    case '039':
      return objError(`CTA.DISP.PARA NUEVA`);
    case '040':
      return objError(`CUENTA CANCELADA`);
    case '041':
      return objError(`CUENTA REABIERTA`);
    case '042':
      return objError(`ORDEN DE NO PAGO`);
    case '043':
      return objError(`FUERA DE RANGO`);
    case '044':
      return objError(`CHEQUE PAGADO`);
    case '045':
      return objError(`CHEQUE NO PAGADO`);
    case '046':
      return objError(`REVERSO ERRADO`);
    case '047':
      return objError(`REQ.TARJETA SUPERV.`);
    case '048':
      return objError(`CUPO REG. EXCEDIDO`);
    case '049':
      return objError(`SIN ORD. DE NO PAGO`);
    case '050':
      return objError(`NO HAY CHEQUERAS`);
    case '051':
      return objError(`CUENTA YA EXISTE`);
    case '052':
      return objError(`LIBRETA ACTUALIZADA`);
    case '053':
      return objError(`CTA. NO ENTRENAMTO.`);
    case '054':
      return objError(`CTA. ENTRENAMIENTO`);
    case '055':
      return objError(`LINEA ELIMINADA`);
    case '056':
      return objError(`TERM. NO AUTORIZADO`);
    case '057':
      return objError(`SIN MOVIMIENTO HOY`);
    case '058':
      return objError(`SIN TRANSACCIONES`);
    case '059':
      return objError(`NRO.LIBRETA ERRADO`);
    case '060':
      return objError(`R.U.T. INVALIDO`);
    case '061':
      return objError(`IDENTIFICACION INVALIDA`);
    case '062':
      return objError(`CODIGO COND.ERRADO`);
    case '063':
      return objError(`SISTEMA NO ABIERTO`);
    case '064':
      return objError(`FIN MENS.DE RECHAZO`);
    case '065':
      return objError(`SISTEMA CERRO BIEN`);
    case '066':
      return objError(`NO HAY EST.ABIERTAS`);
    case '067':
      return objError(`NO HAY MENS.RECHAZO`);
    case '068':
      return objError(`B.TERM. TRABAJANDO`);
    case '069':
      return objError(`HAY MENS.PENDIENTES`);
    case '070':
      return objError(`RANGO YA EXISTE`);
    case '071':
      return objError(`NO HAY O. DE NO PAGO`);
    case '072':
      return objError(`NO REQ. CHEQUERA`);
    case '073':
      return objError(`TERMINAL NO EXISTE`);
    case '074':
      return objError(`BALANCES NO EN CERO`);
    case '075':
      return objError(`HAY LINEAS NO POST.`);
    case '076':
      return objError(`SIN STATUS NI MISC.`);
    case '077':
      return objError(`MONTO EQUIVOCADO`);
    case '078':
      return objError(`CTA SIN MOVIMIENTO`);
    case '079':
      return objError(`CHEQUE EN CONSULTA`);
    case '080':
      return objError(`SIN CHEQ EN CONSULTA`);
    case '081':
      return objError(`CONSULTA RECHAZADA`);
    case '082':
      return objError(`TRANS. RECHAZADA`);
    case '083':
      return objError(`DOCUMENTO DUPLICADO`);
    case '084':
      return objError(`CAMPO MUY LARGO`);
    case '085':
      return objError(`CON MOVIMIENTOS HOY`);
    case '086':
      return objError(`MICROFICHA 9999 A/99`);
    case '087':
      return objError(`PIERDE REAJUSTE`);
    case '088':
      return objError(`TIPO CUENTA ERRADO`);
    case '089':
      return objError(`TIPO SERV. ERRADO`);
    case '090':
      return objError(`TIENE OTRAS SIT.ESP`);
    case '091':
      return objError(`HAY RETENCIONES`);
    case '092':
      return objError(`CON SALDO BLOQUEADO`);
    case '093':
      return objError(`DEP EFECTIVO DIA`);
    case '094':
      return objError(`CARNET ID: 99999999`);
    case '095':
      return objError(`MONTO NO AUTORIZADO`);
    case '096':
      return objError(`MONTO NO CORRESPONDE`);
    case '097':
      return objError(`DOC.COBRADO ANTES DE PLAZO`);
    case '098':
      return objError(`CANCEL. PREVIAMENTE`);
    case '099':
      return objError(`NRO. DOCUM. ERRADO`);
    case '100':
      return objError(`ACTUAL. PREVIAMENTE`);
    case '101':
      return objError(`CARNET ANT. ERRADO`);
    case '102':
      return objError(`O.N.P.YA EXISTE`);
    case '103':
      return objError(`CTA DE OTRA OFICINA`);
    case '104':
      return objError(`YA TIENE ORDEN PAGO`);
    case '105':
      return objError(`NO HAY ORDEN PAGO`);
    case '106':
      return objError(`CUENTA NO VIGENTE`);
    case '107':
      return objError(`NO ES CTA. JUDICIAL`);
    case '108':
      return objError(`ES CUENTA JUDICIAL`);
    case '109':
      return objError(`CTA DE ESTA OFICINA`);
    case '110':
      return objError(`OF.RECAUDADORA INV.`);
    case '111':
      return objError(`BANCO INVALIDO`);
    case '112':
      return objError(`CUENTA CONDICIONAL`);
    case '113':
      return objError(`INMOVIL. PARA GIROS`);
    case '114':
      return objError(`DEBE INGRESAR 0 O 1`);
    case '115':
      return objError(`NO ES CANJE INTERNO`);
    case '116':
      return objError(`CHEQUE OTRA PLAZA`);
    case '117':
      return objError(`DOCUMENTO DIA ANTERIOR`);
    case '118':
      return objError(`EXENTA IMPTO`);
    case '119':
      return objError(`AFECTA IMPTO`);
    case '120':
      return objError(`FECHA INVALIDA`);
    case '121':
      return objError(`DIV.ANTERIOR VIGTE.`);
    case '122':
      return objError(`DIV.NO CONSTITUIDO`);
    case '123':
      return objError(`DIVIDENDO YA PAGADO`);
    case '124':
      return objError(`REVERSA INVALIDA`);
    case '125':
      return objError(`OFICINA MISMA PLAZA`);
    case '126':
      return objError(`CARGA DOLAR/INTERES`);
    case '127':
      return objError(`UF NO CORRESPONDE`);
    case '128':
      return objError(`OFICINA INVALIDA`);
    case '129':
      return objError(`TOTALES NO DISPONIBLES`);
    case '130':
      return objError(`INICIO MODO CANJE`);
    case '131':
      return objError(`FIN MODO CANJE`);
    case '132':
      return objError(`NO ES CTA. VIVIENDA`);
    case '133':
      return objError(`CTA. SIN DERECHO`);
    case '134':
      return objError(`ARCHIVO CERRADO`);
    case '135':
      return objError(`NO PROCEDE APLICAR`);
    case '136':
      return objError(`CUENTA CON CONVENIO`);
    case '137':
      return objError(`OPERACION NO EXISTE`);
    case '138':
      return objError(`ERROR EN CUOTA`);
    case '139':
      return objError(`OPERAC DE OTRA OFIC`);
    case '140':
      return objError(`ERROR TRANSACCION`);
    case '141':
      return objError(`CUENTA NUEVA`);
    case '142':
      return objError(`SIN MENSAJES RECHAZO`);
    case '143':
      return objError(`APLIC. NO DISPONIBLE`);
    case '144':
      return objError(`DIGITE CAUSA = 1`);
    case '145':
      return objError(`NO ES CTA. PLAZO`);
    case '146':
      return objError(`CUENTA SIN AVISO`);
    case '147':
      return objError(`NO ES CTA. GIRO DIF.`);
    case '148':
      return objError(`FECHA MENOR 30 DIAS`);
    case '149':
      return objError(`REG. AVISO MISMO DIA`);
    case '150':
      return objError(`AVISO NO EXISTE`);
    case '151':
      return objError(`GIRO PAGADO`);
    case '152':
      return objError(`GIRO SIN AVISO`);
    case '153':
      return objError(`AVISO NO PROCEDE`);
    case '154':
      return objError(`MONTO MAYOR AVISO`);
    case '155':
      return objError(`AUTORIZ. NO VIGENTE`);
    case '156':
      return objError(`CODIGO GASTO ERRONEO`);
    case '157':
      return objError(`TIENE LINEA CREDITO`);
    case '158':
      return objError(`CREA SALDO ACREEDOR`);
    case '159':
      return objError(`CTA. LINEA CREDITO`);
    case '160':
      return objError(`DIVDOS. EN CTA.309`);
    case '161':
      return objError(`TRASPASAR SALDO`);
    case '162':
      return objError(`ERROR ARCHIVO UF.`);
    case '163':
      return objError(`CUOTAS EN VENCIDO`);
    case '164':
      return objError(`CERTIF.YA SOLICITADO`);
    case '165':
      return objError(`DOCTO. MISMO DIA`);
    case '166':
      return objError(`FUERA DE PLAZO`);
    case '167':
      return objError(`VALOR UTM ERRONEO`);
    case '168':
      return objError(`FOLIO ERRONEO`);
    case '169':
      return objError(`REGISTRO NO EXISTE`);
    case '170':
      return objError(`REINTEGRO SIN AUTORIZ.`);
    case '171':
      return objError(`AUTORIZ. SIN UTILIZAR`);
    case '172':
      return objError(`REINTEGRO EXCEDE GASTO`);
    case '173':
      return objError(`POSTEOS EXCEDEN MAXIMO`);
    case '174':
      return objError(`FECHA MOVTO ERRONEA`);
    case '175':
      return objError(`CUENTA ELEGIDA`);
    case '176':
      return objError(`OFIC. NO AUTORIZADA`);
    case '177':
      return objError(`DIVID.NO CORRESPONDE`);
    case '178':
      return objError(`SIT. YA REGISTRADA`);
    case '179':
      return objError(`PAGO FUERA DE PLAZO`);
    case '180':
      return objError(`TARJETA INACTIVA`);
    case '181':
      return objError(`BLOQUEADA CLIENTE`);
    case '182':
      return objError(`BLOQUEADA BANCO`);
    case '183':
      return objError(`BLOQUEADA POR MORA`);
    case '184':
      return objError(`BLOQUEADA POR EXCESO`);
    case '185':
      return objError(`BLOQUEADA EVALUACION`);
    case '186':
      return objError(`PERDIDA/ROBADA`);
    case '187':
      return objError(`CARTERA VENCIDA`);
    case '188':
      return objError(`CERRADA/ELIMINADA`);
    case '189':
      return objError(`RENUNCIA`);
    case '190':
      return objError(`CAMBIO TARJETA`);
    case '191':
      return objError(`COBRO ANTICIPADO SIN AVISO`);
    case '192':
      return objError(`ARCHIVO LLENO-AVISE INFORMA.`);
    case '193':
      return objError(`TIPO OFI/JUR.INVAL.`);
    case '194':
      return objError(`OF. NO ENVIA CAMARA`);
    case '195':
      return objError(`OF. NO ES JURIDICC.`);
    case '196':
      return objError(`SDO.CAMARA NO EXIS.`);
    case '197':
      return objError(`REMESA NO EXISTE`);
    case '198':
      return objError(`REMESA YA RECIBIDA`);
    case '199':
      return objError(`REMESA NO RECIBIDA`);
    case '200':
      return objError(`REPARTICION NO EXISTE`);
    case '201':
      return objError(`CUENTA DISPONIBLE`);
    case '202':
      return objError(`CUENTA CANCELADA`);
    case '203':
      return objError(`CTA. ENTRENAMIENTO`);
    case '204':
      return objError(`NO VERIF. CHEQUERA`);
    case '205':
      return objError(`IGNORAR DIFERIDO`);
    case '206':
      return objError(`AFECTA IMPTO`);
    case '207':
      return objError(`STATUS NRO. 7`);
    case '208':
      return objError(`ABIERTA ESTE MES`);
    case '209':
      return objError(`STATUS NRO. 9`);
    case '210':
      return objError(`STATUS NRO. 10`);
    case '211':
      return objError(`STATUS NRO. 11`);
    case '212':
      return objError(`STATUS NRO. 12`);
    case '213':
      return objError(`STATUS NRO. 13`);
    case '214':
      return objError(`STATUS NRO. 14`);
    case '215':
      return objError(`STATUS NRO. 15`);
    case '216':
      return objError(`STATUS NRO. 16`);
    case '217':
      return objError(`PAGO MAYOR AL REQUERIDO`);
    case '218':
      return objError(`FEC.RETIR.NO CORRES`);
    case '219':
      return objError(`DESBORDA SALDO MAESTRO`);
    case '220':
      return objError(`DOCUMENTO PAGADO`);
    case '221':
      return objError(`DEBE INGRESAR PARIDAD`);
    case '222':
      return objError(`TIPO PAGO ERRONEO`);
    case '223':
      return objError(`CHEQUE NO EXISTE`);
    case '224':
      return objError(`CHEQUE YA PAGADO`);
    case '225':
      return objError(`PAGO FUERA DE PLAZO`);
    case '226':
      return objError(`CTA PROCESO TRASP/APLI(REAJ)`);
    case '227':
      return objError(`ERROR MONTO REAJUSTE`);
    case '228':
      return objError(`ERROR MONTO INTERES`);
    case '229':
      return objError(`REVERSAR 1670 0 1690`);
    case '230':
      return objError(`DEBE EFECTUAR 1172 O 1174`);
    case '231':
      return objError(`CONVENIO NO EXISTE`);
    case '232':
      return objError(`CONVENIO VENCIDO`);
    case '233':
      return objError(`IDENTIF. O MONTO INVALIDO`);
    case '234':
      return objError(`MONEDA NO CORRESPONDE`);
    case '235':
      return objError(`CTA PROCESO TRASP/APLI(INT)`);
    case '236':
      return objError(`REVISE DEPOSITO MTO.MAYOR`);
    case '237':
      return objError(`PROX.GIRO PERDERA REAJUSTE`);
    case '238':
      return objError(`CERTIFICADO YA EMITIDO`);
    case '239':
      return objError(`V B DE VISADO PREVIO`);
    case '240':
      return objError(`SOLICITE V. B. DE FIRMA`);
    case '241':
      return objError(`TIPO APERTURA ERRONEO`);
    case '242':
      return objError(`IDENTIF. O NUMERO INVALIDO`);
    case '243':
      return objError(`BCO.NO EXISTE PZA.RECEPCION`);
    case '244':
      return objError(`BCO.EXISTE PLAZA RECEPCION`);
    case '245':
      return objError(`BCO.NO EXISTE PZA.PAGADORA`);
    case '246':
      return objError(`OFICINA PAG. DEBE SER 001`);
    case '247':
      return objError(`BANCO CON PRESENCIA BECH`);
    case '248':
      return objError(`EFECTUAR GIRO CANCELACION`);
    case '249':
      return objError(`NOMINA INVALIDA`);
    case '250':
      return objError(`CTA NO REGISTRADA EN BCA`);
    case '251':
      return objError(`NO EXISTE DIRECTA REVERSA`);
    case '252':
      return objError(`CTA. YA ES AHORRO JOVEN`);
    case '253':
      return objError(`CTA. NO ES AHORRO JOVEN`);
    case '254':
      return objError(`TRX. NO EXISTE EN TABLA`);
    case '255':
      return objError(`NO EXISTE FUNC. VALIDACION`);
    case '256':
      return objError(`DOCUMENTO CONFIRMADO`);
    case '257':
      return objError(`ERROR OBTENER VALOR CHEQUE`);
    case '258':
      return objError(`NO EXISTE NOMBRE`);
    case '259':
      return objError(`ERROR AL ACCESAR CWA`);
    case '260':
      return objError(`CAMPO INVALIDO`);
    case '261':
      return objError(`LARGO AREA NO CORRESPONDE`);
    case '262':
      return objError(`ERROR GENERAL ARCHIVO VSAM`);
    case '263':
      return objError(`ERROR GENERAL DATACOM`);
    case '264':
      return objError(`BASE CERRADA`);
    case '265':
      return objError(`ERROR AL GRABAR JOURNAL`);
    case '266':
      return objError(`TERMINO ANORMAL`);
    case '267':
      return objError(`ERROR NO ESPERADO`);
    case '268':
      return objError(`ERROR AL ACCESAR TWA`);
    case '269':
      return objError(`PAGADO POR REEMPLAZO`);
    case '270':
      return objError(`RETIRADO POR I.N.P`);
    case '271':
      return objError(`TRASLADADO`);
    case '272':
      return objError(`BLOQUEADO PAGO POR INP`);
    case '273':
      return objError(`CADUCADO`);
    case '274':
      return objError(`BLOQUEO DE EMISION`);
    case '275':
      return objError(`PAGO NO ASIGNADO A LA SUCURSAL`);
    case '276':
      return objError(`FECHA CADUCADA`);
    case '277':
      return objError(`TIPO DE PAGO NO CORRESPONDE`);
    case '278':
      return objError(`DOCUMENTO NO EXISTE`);
    case '279':
      return objError(`FECHA DE PAGO ANTICIPADA`);
    case '280':
      return objError(`CONTRATO NO EXISTE`);
    case '281':
      return objError(`CUOTA ANTERIOR IMPAGA`);
    case '282':
      return objError(`CUOTA YA PAGADA`);
    case '283':
      return objError(`DEBE USAR TRANSACCION 8570`);
    case '284':
      return objError(`DEBE USAR TRANSACCION 8560`);
    case '285':
      return objError(`TRX. DEBE USAR SUPERVISOR`);
    case '286':
      return objError(`RUT ERRONEO`);
    case '287':
      return objError(`RUT NO EXISTE COMO CLIENTE`);
    case '288':
      return objError(`NO HAY CUENTA DISPONIBLE`);
    case '289':
      return objError(`TARJETA SIN DEUDA EN DOLARES`);
    case '290':
      return objError(`MONTO > US 30.000 DOLARES`);
    case '291':
      return objError(`TARJ.CON DEUDA USE TR 7140`);
    case '292':
      return objError(`TARJETA BLOQUEADA`);
    case '293':
      return objError(`TARJETA SIN SALDO ACREEDOR`);
    case '294':
      return objError(`MONTO DISTINTO A SALDO`);
    case '295':
      return objError(`CUENTA BLOQUEADA`);
    case '296':
      return objError(`NO EXISTE EN MAESTRO VIVIENDA`);
    case '297':
      return objError(`TARJETA CON SALDO ACREEDOR`);
    case '298':
      return objError(`TARJETA CON SALDO DEUDOR`);
    case '299':
      return objError(`DOCUMENTO EN CUSTODIA`);
    case '300':
      return objError(`TARJETA SIN CUPO EN DOLARES`);
    case '301':
      return objError(`ES CUENTA ESPECIAL`);
    case '302':
      return objError(`BLOQUEADO PAGO POR CAPREDENA`);
    case '303':
      return objError(`RETIRADO POR CAPREDENA`);
    case '304':
      return objError(`CUENTAS SIN CHEQUES`);
    case '305':
      return objError(`CUENTA GASTOS`);
    case '306':
      return objError(`CUENTA VISTA`);
    case '307':
      return objError(`NO ES CUENTA VISTA`);
    case '308':
      return objError(`CUENTA NO CREADA`);
    case '309':
      return objError(`CUENTA NO USA CHEQUES`);
    case '310':
      return objError(`ORIGEN NO CORRESPONDE`);
    case '311':
      return objError(`MONTO MAYOR A 500`);
    case '312':
      return objError(`DECLARACION RECHAZADA`);
    case '313':
      return objError(`SALDO DE CAJA INSUFICIENTE`);
    case '314':
      return objError(`TERMINAL NO ES DE LA OFICINA`);
    case '315':
      return objError(`MONTO MAYOR A 5 MILLONES`);
    case '316':
      return objError(`APLICACION DE ORIGEN INVALIDA`);
    case '317':
      return objError(`CANAL NO DISPONIBLE`);
    case '318':
      return objError(`APLICACION NO EXISTE`);
    case '319':
      return objError(`CONVENIO NO CORRESPONDE`);
    case '320':
      return objError(`DOCUMENTO NO DEPOSITABLE`);
    case '321':
      return objError(`SUBPRODUCTO INVALIDO`);
    case '322':
      return objError(`C.GTOS COBZA,PAGO ANTES 14 HR.`);
    case '323':
      return objError(`MONTO ES MAYOR A RETENCIONES`);
    case '324':
      return objError(`MONTO PESOS NO CORRESPONDE`);
    case '325':
      return objError(`MONTO DOLAR NO CORRESPONDE`);
    case '326':
      return objError(`MTO. > o = a 10 MILLONES`);
    case '327':
      return objError(`CRITERIO NO CORRESPONDE`);
    case '328':
      return objError(`DEBE INGRESAR CAPITAL`);
    case '329':
      return objError(`MTO.DEBE SER > O = A CAPITAL`);
    case '330':
      return objError(`MOVIMIENTO SIN VIGENCIA`);
    case '331':
      return objError(`CTA NO EXISTE EN MTO ACUMULADO`);
    case '332':
      return objError(`MONTO MAYOR A 10`);
    case '333':
      return objError(`NO SE PERMITE PAGO A FUTURO`);
    case '334':
      return objError(`MONTO DEBE SER MAYOR A CERO`);
    case '335':
      return objError(`DECLARACION SIN PAGO`);
    case '336':
      return objError(`MONTO 87 NO CORRESPONDE`);
    case '337':
      return objError(`PERIODO NO CORRESPONDE`);
    case '338':
      return objError(`MTO CUOTA < A 3.000`);
    case '339':
      return objError(`MONTO MAYOR AL DISPONIBLE`);
    case '340':
      return objError(`CUENTA DE CARGO NO VIGENTE`);
    case '341':
      return objError(`CUENTA DE ABONO NO VIGENTE`);
    case '342':
      return objError(`342 FOGAPE NO PERMITE AUMENTO`);
    case '343':
      return objError(`343 FOGAPE NO PERMITE DISMINUCION`);
    case '344':
      return objError(`344 TRANSACCION MASTERCARD`);
    case '345':
      return objError(`345 MTO.DEBE SER SUP.A 100.000`);
    case '346':
      return objError(`346 TIPO TARJETA NO PERMITE CUOTAS`);
    case '347':
      return objError(`347 INGRESAR NUM.CUOTAS 1-48`);
    case '348':
      return objError(`348 RANGO DE CHEQUE INVALIDO`);
    case '349':
      return objError(`349 MONTO MENOR A 30 UF`);
    case '350':
      return objError(`350 TARJ.@INET. NO PERM.AVANCES`);
    case '351':
      return objError(`351 OFI. NO TIENE TERMINAL ASOC.`);
    case '352':
      return objError(`352 TRANSACCION NO AUTORIZADA`);
    case '353':
      return objError(`353 PAGO C/GTOS COBZA.NO PERMITIDO`);
    case '354':
      return objError(`354 ERROR EN JOURNAL CPN`);
    case '355':
      return objError(`355 RUTA NO EXISTE`);
    case '356':
      return objError(`356 PROX.GIRO PIERDE INTERESES`);
    case '357':
      return objError(`357 PIERDE INTERESES`);
    case '358':
      return objError(`358 MTO-94 DEBE SER = CERO`);
    case '359':
      return objError(`359 MTO-94 DEBE SER > CERO`);
    case '360':
      return objError(`360 MTO LCRED. MENOR A 100.000`);
    case '361':
      return objError(`361 MTO LCRED. MENOR A 50.000`);
    case '362':
      return objError(`362 MTO EXCEDE A MTO AUTORIZAD`);
    case '363':
      return objError(`363 LINEA DE CREDITO <= QUE 0`);
    case '364':
      return objError(`364 CTA NO ES TIPO LINEA CRED.`);
    case '365':
      return objError(`365 OPERACION DE OTRA OFICINA`);
    case '366':
      return objError(`366 OPERACION YA CONFIRMADA`);
    case '367':
      return objError(`367 CTA NO PERTENECE A CONCEPTO`);
    case '368':
      return objError(`368 OPERACION NO RECAUDADA`);
    case '369':
      return objError(`369 OPERACION YA CANCELADA`);
    case '370':
      return objError(`370 CONCEPTO NO PERMITIDO`);
    case '371':
      return objError(`371 EXCEDE LIMITE DIARIO DEP.`);
    case '372':
      return objError(`372 NO EXISTE DIRECTA ASOCIADA`);
    case '373':
      return objError(`373 VISTO BUENO VISADO PREVIO`);
    case '374':
      return objError(`374 CODIGO SECCION ERRADO`);
    case '375':
      return objError(`375 CTA SIN LIB.NO CORRES.IMPRIMIR`);
    case '376':
      return objError(`376 CUENTA SIN LIBRETA`);
    case '377':
      return objError(`377 CTA.NO CORRESP.A TIPO DEPOSITO`);
    case '378':
      return objError(`378 SUCURSAL NO AUTORIZADA`);
    case '379':
      return objError(`379 NO EXISTE REGISTRO COMISION`);
    case '380':
      return objError(`380 NO EXISTE REGISTRO IVA`);
    case '381':
      return objError(`381 CUENTA CON LIBRETA`);
    case '382':
      return objError(`382 CPTO NO APLICABLE A VERSION`);
    case '383':
      return objError(`383 DEBE REGISTRAR INTRUCC.`);
    case '384':
      return objError(`384 CODIGO CUENTA NO EXISTE`);
    case '385':
      return objError(`385 DEBE RECAUDAR CON TRX 8090`);
    case '386':
      return objError(`386 DEBE USAR TRANSACCION 0140`);
    case '387':
      return objError(`387 DEBE USAR TRANSACCION 0900`);
    case '388':
      return objError(`388 TASA NO VALIDA`);
    case '389':
      return objError(`389 PLAZO NO NUMERICO`);
    case '390':
      return objError(`390 NO EXISTE PERIODO/PLAZO`);
    case '391':
      return objError(`391 ERROR EN PLAZO/PERIODO`);
    case '392':
      return objError(`392 ERROR GENERAL CONDICION CICS`);
    case '393':
      return objError(`393 EXCEDE MONTO DIARIO DE GIRO`);
    case '394':
      return objError(`394 TIPO CTA NO AUTORIZADO`);
    case '395':
      return objError(`395 PERDIO INTERESES`);
    case '396':
      return objError(`396 PERDIO REAJUSTE`);
    case '397':
      return objError(`397 PROBLEMA AL TOTALIZAR REDBANC`);
    case '398':
      return objError(`398 ACTUALICE SU LIBRETA`);
    case '399':
      return objError(`399 CLIENTE SIN CERTIFICADO`);
    case '400':
      return objError(`400 MTO LCRED. MENOR A 100.000`);
    case '401':
      return objError(`401 MTO LCRED. MENOR A 50.000`);
    case '402':
      return objError(`402 MTO MENOR IGUAL QUE 0`);
    case '403':
      return objError(`403 ABONO < 30% PAGO MINIMO`);
    case '404':
      return objError(`404 USAR OPC.2 BCO C/P MISMA PLAZA`);
    case '405':
      return objError(`405 DOCUMENTO CON RETENCION`);
    case '406':
      return objError(`406 FOLIO IDENTIFICACION ERRONEO`);
    case '407':
      return objError(`407 DEBE CONCURRIR AL MESON`);
    case '408':
      return objError(`408 PAGO EFECTIVO AL TOMADOR`);
    case '409':
      return objError(`409 MONTO MENOR A 10.000`);
    case '410':
      return objError(`410 MONTO MAYOR A 500.000`);
    case '411':
      return objError(`411 TRX NO AUTORIZADA POR TIPO.CTA`);
    case '412':
      return objError(`412 SECUENCIA NO EXISTE`);
    case '413':
      return objError(`413 CAJ.AUTO. NO ES DE LA SUCURSAL`);
    case '414':
      return objError(`414 MONTO LCRED. MENOR A 0`);
    case '415':
      return objError(`415 SUSPENSION DE PAGO`);
    case '416':
      return objError(`416 INST.DEBE INGRESAR POR CPN`);
    case '417':
      return objError(`417 INSTR.DEBE ANULAR POR CPN`);
    case '418':
      return objError(`418 MONTO MAYOR A 1 MILLON`);
    case '419':
      return objError(`419 REVISAR NO SE GRABO -PAC-`);
    case '420':
      return objError(`420 CONVENIO RECAUD. ERRONEO`);
    case '421':
      return objError(`421 FOGAPE NO PERMITE RENOVAC.`);
    case '422':
      return objError(`422 LIN.FOGAPE YA FUE RENOVADA`);
    case '423':
      return objError(`423 DEBE SER MINIMO 12 MESES`);
    case '424':
      return objError(`424 DEBE SER MINIMO 24 MESES`);
    case '425':
      return objError(`425 MONTO RENOVACION ERRONEO`);
    case '426':
      return objError(`426 CTA C/LINEA DE CRE.VIGENTE`);
    case '427':
      return objError(`427 VENCIMIENTO NO CORRESPONDE`);
    case '428':
      return objError(`428 CLIENTE HA PAGADO EN UNA`);
    case '429':
      return objError(`OPORTUNIDAD MENOS DEL MINIMO`);
    case '430':
      return objError(`430 CLIENTE HA PAGADO EN DOS`);
    case '431':
      return objError(`OPORTUNIDADES MENOS DEL MINIMO`);
    case '432':
      return objError(`432 CLIENTE HA PAGADO EN TRES`);
    case '433':
      return objError(`OPORTUNIDADES MENOS DEL MINIMO`);
    case '434':
      return objError(`434 CLIENTE COMPLETO MAXIMO DE`);
    case '435':
      return objError(`PAGOS MINIMOS NO EXIGIBLES`);
    case '436':
      return objError(`436 CLIENTE NO DEBERIA PAGAR`);
    case '437':
      return objError(`MENOS DEL MONTO MINIMO`);
    case '438':
      return objError(`438 DIF. EXIGIDA DEL MINIMO`);
    case '439':
      return objError(`QUEDA EN ESTADO CUENTA IMPAGA`);
    case '440':
      return objError(`440 ENTREGAR VOLANTE AHORRO UF`);
    case '441':
      return objError(`441 TRX.DEBE SER CURSADA X CPN`);
    case '442':
      return objError(`442 EXCEDE LIMITE GIRO X CAJA`);
    case '443':
      return objError(`443 NO PERMITIDA A CTA. GASTOS`);
    case '444':
      return objError(`TRX.NO PERMITIDA A CAJEROS EXT.`);
    case '445':
      return objError(`445 MOVIMIENTO YA FUE LIBERADO`);
    case '446':
      return objError(`446 FORMULARIO NO PERMITIDO`);
    case '447':
      return objError(`447 RACAUDACION C/CARGO A CTAS`);
    case '448':
      return objError(`448 OPERE EN MERCADO CAPITALES`);
    case '449':
      return objError(`449 OPERACION ES GIRO EXPRESS`);
    case '450':
      return objError(`450 DEBE USAR TRANSACCION 8030`);
    case '451':
      return objError(`451 INSTRUCCION NO AUTORIZADA`);
    case '452':
      return objError(`452 OPCION ELIMINADA`);
    case '453':
      return objError(`453 COD. OPERACION INVALIDO`);
    case '454':
      return objError(`454 LLENAR DECL.EFEC.CIRC.2540`);
    case '455':
      return objError(`455 MONTO > US$ 7.000 DOLARES`);
    case '456':
      return objError(`456 CANCELE Y DUPLIQUE CON 00`);
    case '457':
      return objError(`457 SUBPRODUCTO 6 MICROEMPRESA`);
    case '458':
      return objError(`458 ERROR EN COBRO DE COMISION`);
    case '459':
      return objError(`459 USAR SOLO OPCION 01 -OBMP-`);
    case '460':
      return objError(`460 NO EXISTE NOMBRE TITULAR 2`);
    case '461':
      return objError(`461 REVISAR NO PUDO SOL.N.OPER.`);
    case '462':
      return objError(`462 REVISAR NO PUDO CREAR V.V.`);
    case '463':
      return objError(`463 REVISAR NO PUDO RECAUDAR`);
    case '464':
      return objError(`464 FOLIO NO DISPONIBLE`);
    case '465':
      return objError(`465 CODIGO CSL NO VALIDO`);
    case '466':
      return objError(`466 TRX NO PERMITIDA EN FILIAL`);
    case '467':
      return objError(`467 MONTO MAYOR A 300.000`);
    case '468':
      return objError(`468 V.B UNIDAD CENTRAL DE PAGO`);
    case '469':
      return objError(`469 C/TAPA YA FUE IMPRESA`);
    case '470':
      return objError(`470 MTO BLOQUEO DIST. A COMISIONES`);
    case '471':
      return objError(`471 SERIE DE CHEQUE INVALIDA`);
    case '472':
      return objError(`472 NO EXISTE CTA EN TIP-FIRMA`);
    case '473':
      return objError(`473 SALDO DISTINTO DE CERO`);
    case '474':
      return objError(`474 CTA NO PERMITE DEP. X CAJA`);
    case '475':
      return objError(`GIRO CON COMISION UF 0.12+IVA`);
    case '476':
      return objError(`476 TIENE MAS DE 2 APODERADOS`);
    case '477':
      return objError(`477 SIN APODERADOS VIGENTES`);
    case '478':
      return objError(`478 APODERADO SIN NOMBRE`);
    case '479':
      return objError(`479 ESPERE 1DIA X CAMBIOTIPOCTA`);
    case '480':
      return objError(`480 NO EXISTE REG. AHOMTAPA`);
    case '481':
      return objError(`481 CUENTA CON RESTRICCION`);
    case '482':
      return objError(`482 NO PERMITE INGRESO DE FORM $0`);
    case '483':
      return objError(`483 MTO-91 DEBE SER > CERO`);
    case '484':
      return objError(`484 MTO-GIRO ERRONEO HAY COMISION`);
    case '485':
      return objError(`485 CUENTA DE AHORRO DEPORTE`);
    case '486':
      return objError(`486 CUENTA CON SEGURO`);
    case '487':
      return objError(`487 REVISAR NO PUDO CANCELAR V.V.`);
    case '488':
      return objError(`488 SOLO PAGO EN EFECTIVO`);
    case '489':
      return objError(`489 REGISTRA ANTECEDENTES LEGALES`);
    case '490':
      return objError(`490 DOCUMENTO BLOQUEADO`);
    case '491':
      return objError(`491 MONTO > E$ 7.000 EUROS`);
    case '492':
      return objError(`492 MONTO EURO  NO CORRESPONDE`);
    case '493':
      return objError(`493 CTA BLOQUEDA CONCURRA A MESON`);
    case '494':
      return objError(`494 UTILIZAR TR 510 PAGO CHEQUE`);
    case '495':
      return objError(`495 NO ACEPTA CHEQUE OT. BANCOS`);
    case '496':
      return objError(`496 DEBE USER TRANSACCION 8094`);
    case '497':
      return objError(`497 O.N.P. NO EXISTE`);
    case '498':
      return objError(`498 RANGO ERRONEO O.N.P.`);
    case '499':
      return objError(`499 O.N.P. NO TRANSITORIA`);
    case '500':
      return objError(`500 RANGO EXCEDE 100 CHEQUES`);
    case '501':
      return objError(`501 MONEDA DOLAR NO PERMITIDA`);
    case '502':
      return objError(`502 DEPOSITO MINIMO $ 5.000`);
    case '503':
      return objError(`503 ORIGEN NO AUTORIZADO`);
    case '504':
      return objError(`504ONP PROVISORIA RATIFICAR PU`);
    case '505':
      return objError(`505 PIERDE INTERESES PREMIO`);
    case '506':
      return objError(`506 LINEA YA FUE CURSADA`);
    case '507':
      return objError(`507 PROX GIRO PIERDE INT.PREMIO`);
    case '508':
      return objError(`508 PERDIO INTERESES PREMIO`);
    case '509':
      return objError(`509 MONEDA NO AUTORIZADA`);
    case '510':
      return objError(`510 PAGO NO REALIZADO`);
    case '511':
      return objError(`511 REVERSA NO REALIZADA`);
    case '512':
      return objError(`512 ES CUENTA RUT`);
    case '513':
      return objError(`513 NO ES CUENTA RUT`);
    case '514':
      return objError(`514 CTA SUPERA TOPE AUTORIZADO`);
    case '515':
      return objError(`515 CTA NO BIPERSONAL`);
    case '516':
      return objError(`516 TIPO CARGA ERRONEO`);
    case '517':
      return objError(`517 APERTURA CTA SOLO POR PU`);
    case '518':
      return objError(`518 CUENTA NO AUTORIZADA`);
    case '519':
      return objError(`519 CUENTA NO RECIBE DEPOSITOS`);
    case '520':
      return objError(`520 CTA.NO RECIBE DEP. C/DOCTOS`);
    case '521':
      return objError(`521 CTA.NO RECIBE DEPOS. POR CAJA`);
    case '522':
      return objError(`522 ERROR EN SERVICIO AFBCCCRU`);
    case '523':
      return objError(`523 NO PERMITIDA PARA CTA.NIVEL 1`);
    case '524':
      return objError(`524 ERROR ABEND SERVICIO AFBVCCRU`);
    case '525':
      return objError(`525 ERROR GRAL SERVICIO AFBVCCRU`);
    case '526':
      return objError(`526 CUENTA NO ES UNICA FISCAL`);
    case '527':
      return objError(`527 RUT NO REGISTRA CRED.HIPOT.`);
    case '528':
      return objError(`528 NO EXISTE VALOR IMPUESTO`);
    case '529':
      return objError(`529 ERROR GRABAR COD.AFINIDAD`);
    case '530':
      return objError(`530 GLOSA NO EXISTE COMO ABONO`);
    case '531':
      return objError(`531 CODIGO DE GLOSA NO VIGENTE`);
    case '532':
      return objError(`532 GLOSA NO EXISTE COMO CARGO`);
    case '533':
      return objError(`533 MTO.MAYOR O IGUAL 4000000`);
    case '534':
      return objError(`534 DEBE LLENAR DECL.CIRC.2479`);
    case '535':
      return objError(`535 DEBE UTILIZAR TRX 0516`);
    case '536':
      return objError(`536 PROD.NO PERMITIDO POR CAJA`);
    case '537':
      return objError(`537 DEBE USAR TRX 8030`);
    case '538':
      return objError(`538 CTA NO PERMITE GIROS X CAJA`);
    case '539':
      return objError(`539 CTA BLOQUEADA POLITICA NEG`);
    case '540':
      return objError(`SALDO MAYOR O IGUAL A MM$50`);
    case '541':
      return objError(`541 DIG. VERIF. ERRONEO`);
    case '542':
      return objError(`542 CUENTA CON SALDO MAYOR`);
    case '543':
      return objError(`DEBE INGRESAR EN AFP BANSANDER`);
    case '544':
      return objError(`544 CEDULA NO VIGENTE`);
    case '545':
      return objError(`545 ABONO MAYOR AL AUTORIZADO`);
    case '546':
      return objError(`546 MTO ACUMULADO NO PERMITIDO`);
    case '547':
      return objError(`547 MONTO MAYOR A 30 UF`);
    case '548':
      return objError(`548 CARGO EXCEDE MTO ACUMULADO`);
    case '549':
      return objError(`549 ABONO EXCEDE AL PERMITIDO`);
    case '550':
      return objError(`550 CARGO EXCEDE AL PERMITIDO`);
    case '551':
      return objError(`551 LLENE FORM.CONOCIM. CLIENTE`);
    case '552':
      return objError(`552 MOV NO PERMITIDO POR HORARIO`);
    case '553':
      return objError(`553 CURSAR C/P POR PROC. INTERNOS`);
    case '554':
      return objError(`554 BALANCE DE LIBRETA ERRADO`);
    case '555':
      return objError(`555 MONTO MAYOR A $50.000`);
    case '556':
      return objError(`556 ANOTE FOLIO REVERSO CHEQUE`);
    case '557':
      return objError(`557 TIPO CAMBIO MAYOR QUE 0`);
    case '558':
      return objError(`558 CLIENTE IMPEDIDO DE OPERAR`);
    default:
      return objError(`ERROR DESCONOCIDO`);
  }
}

module.exports = cicsErrors;
