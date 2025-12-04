body = {conv_email}.get("body")
oc = ""
solped = ""
bot_id = ""
step = ""

if "Se ha emitido la OC número" in body:
  oc = body.split("Se ha emitido la OC número ")[-1].split(" ")[0].strip()
  
if "la solped número" in body:
  solped = body.split("la solped número ")[-1].spli t(" ")[0].strip()
  
if "Se ha emitido la solped numero" in body:
  solped = body.split("la solped numero ")[-1].spli t(" ")[0].strip()
  step = "SOLPED_EMITIDA"
  
if "ID " in body:
  bot_id = "ID " + body.split("ID ")[-1].split(" ")[0].strip()
  
if "Hemos recibido su solicitud de creación de Orden de compra" in body:
  step = "INICIO"
  
if "Los datos ingresados en SAP presentarn un error" in body:
  step = "CARGA_DATOS"
  

  
print("OC: ", oc)
print("SOLPED: ", solped)
print("BOT_ID: ", bot_id)
print("STEP: ", step)