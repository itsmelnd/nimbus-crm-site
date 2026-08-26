
/* =====================================================================
   Nimbus CRM — demo shell
   Everything below is a mock. No network calls, no persistence beyond
   localStorage, no payment processing. Swap the `db` layer for a real
   API later; the views only talk to it through the helpers here.
   ===================================================================== */

const KEY = 'nimbus-crm-demo-v1';
const LANG_KEY = 'nimbus-lang';

/* ------------------------------ i18n ------------------------------ */
let lang = 'sv';
try{ lang = localStorage.getItem(LANG_KEY) || 'sv'; }catch(e){}

const STR = {
en: {
  'app.title':'Nimbus CRM — Demo',
  'nav.dashboard':'Dashboard','nav.pipeline':'Pipeline','nav.companies':'Customer list',
  'nav.quotes':'Offers & Quotes','nav.invoices':'Invoices',
  'nav.payments':'Payments','nav.automation':'Automation log','nav.portal':'Client portal preview','nav.email':'Email','nav.tasks':'Tasks','nav.lost':'Lost deals',
  'lost.sub':'Deals moved to Lost leave the pipeline after 24h and land here.','lost.empty':'No lost deals.','lost.archived':'Archived','lost.leaves':'Leaves pipeline soon','lost.restored':'Deal restored.','lost.total':'%s total lost','lost.left':'Leaves pipeline in %s h %s min',
  'log.dealLost':'Deal "%s" lost (quote %s rejected)',
  'task.sub':'Reminders linked to customers and deals.','task.todo':'To do','task.new':'New task','task.title':'Title','task.due':'Due','task.done':'Done','task.open':'Open tasks',
  'task.empty':'No tasks yet.','task.created':'Task created.','task.updated':'Task updated.','task.deleted':'Task deleted.',
  'task.overdue':'Overdue','task.today':'Today','task.allDone':'All tasks done 🎉',
  'confirm.delTask':'Delete task "%s"?',
  'notif.invoice':'Invoice %s is overdue','notif.deal':'%s — expected close passed','notif.task':'Task "%s" is overdue','notif.none':'No notifications 🎉','notif.title':'Notifications',
  'grp.sales':'Sales','grp.revenue':'Revenue','grp.system':'System',
  'side.demo':'Demo build — data lives in your Supabase database. No real emails, no real payments.',
  'side.reset':'Reset demo data',
  'cur.tip':'Display currency','cur.USD':'USD — US Dollar','cur.SEK':'SEK — Swedish Krona','cur.NOK':'NOK — Norwegian Krone','cur.DKK':'DKK — Danish Krone','cur.EUR':'EUR — Euro',
  'theme.light':'Switch to light theme','theme.dark':'Switch to dark theme',
  'nav.profile':'Profile',
  'profile.sub':'Your account and preferences','profile.account':'Account','profile.email':'Email',
  'profile.role':'Role','profile.companies':'Companies','profile.name':'Name',
  'profile.preferences':'Preferences','profile.lang':'Language','profile.currency':'Currency','profile.theme':'Theme',
  'profile.security':'Security','profile.newPassword':'New password','profile.changePassword':'Change password',
  'profile.nameSaved':'Name updated.','profile.passwordChanged':'Password updated.',
  'profile.pwShort':'Password must be at least 6 characters.',
  'st.New':'New','st.Contacted':'Contacted','st.Proposal':'Offer',
  'st.Won':'Won','st.Lost':'Lost','st.Draft':'Draft','st.Sent':'Sent','st.Opened':'Opened',
  'st.Accepted':'Accepted','st.Paid':'Paid','st.Active':'Active','st.Rejected':'Rejected',
  'st.Overdue':'Overdue','st.Cancelled':'Cancelled','st.Void':'Void',
  'btn.save':'Save','btn.cancel':'Cancel','btn.send':'Send','btn.open':'Open','btn.delete':'Delete',
  'btn.view':'View','btn.accept':'Accept','btn.decline':'Decline','btn.quote':'Quote',
  'btn.newDeal':'New deal','btn.newQuote':'New quote',
  'btn.runAuto':'Run automations','btn.advance':'Advance 7 days','btn.takePay':'Take payment',
  'btn.markAccept':'Mark accepted','btn.markReject':'Mark rejected','btn.genInv':'Generate invoices',
  'btn.clientView':'Client view','btn.sendRemind':'Send reminders','btn.runNow':'Run now',
  'btn.payNow':'Pay now (demo)','btn.create':'Create','btn.add':'Add',
  'btn.board':'Board','btn.openBoard':'Open board','btn.sendToClient':'Send to client',
  'btn.back':'← All quotes',
  'btn.billingCycle':'Run billing cycle','btn.pause':'Pause','btn.resume':'Resume','btn.recordPay':'Record payment',
  'dash.sub':'Demo date: <b>%s</b> · %s customers · %s open deals',
  'dash.banner':'Demo mode. Data lives in your Supabase database — quotes are not emailed, invoices are not billed, and "payments" are simulated. Use <b>Run automations</b> and <b>Advance 7 days</b> to see the workflow rules fire.',
  'kpi.open':'Open pipeline','kpi.open.d':'%s deals in play',
  'kpi.won':'Won this period','kpi.won.d':'closed / accepted',
  'kpi.out':'Outstanding','kpi.out.d':'%s invoice(s) overdue',
  'kpi.col':'Collected','kpi.col.d':'simulated payments',
  'kpi.mrr':'Recurring (MRR)','kpi.mrr.d':'%s active subscription(s)',
  'dash.pipe':'Pipeline by stage','dash.act':'Recent activity','dash.attn':'Needs attention',
  'log.empty':'Nothing yet.','attn.clear':'All clear. Nothing overdue or waiting.',
  'attn.overdue':'Overdue invoice','attn.quoteWait':'Quote awaiting reply','attn.quoteValid':'valid to %s',
  'attn.draft':'Draft quote not sent','attn.draftCreated':'created %s',
  'attn.dealLate':'Deal past close date','attn.expected':'expected %s',
  'th.what':'What','th.record':'Record','th.amount':'Amount','th.when':'When',
  'pipeline.sub':'Drag cards between stages · %s open',
  'board.compact':'Compact','board.roomy':'Large',
  'companies.sub':'Private and company customers','companies.empty':'No customers yet.',
  'companies.undo':'Undo',
  'nav.trash':'Trash','trash.sub':'Deleted customers — restore or delete forever.','trash.empty':'The trash is empty.',
  'trash.restore':'Restore','trash.purge':'Delete forever','trash.restored':'Customer restored.','trash.purged':'Deleted forever.','trash.at':'Deleted',
  'field.industry':'Industry','confirm.purgeTrash':'Permanently delete "%s" and all its data? This cannot be undone.',
  'field.name':'Name',
  'toast.companyCreated':'Customer added.','toast.companyUpdated':'Customer updated.','toast.companyDeleted':'Customer deleted.','toast.undo':'Done — everything restored.',
  'list.search':'Search…','list.all':'All statuses','list.none':'No matches.',
  'btn.newCompany':'New company customer','btn.newPerson':'New private customer','btn.edit':'Edit','btn.print':'Print','btn.preview':'Preview','btn.viewQuote':'View quote',
  'th.industry':'Industry','th.deals':'Deals','th.value':'Value','th.name':'Name',
  'doc.invoice':'Invoice %s','doc.due':'Due %s',
  'confirm.delDeal':'Delete deal "%s"? (demo data only)',
  'field.dealName':'Deal name','field.value':'Value','field.stage':'Stage',
  'field.close':'Expected close','btn.createDeal':'Create deal','toast.dealCreated':'Deal created.','toast.dealUpdated':'Deal updated.',
  'deal.newCustomer':'New customer','deal.nameRequired':'Enter a name.','deal.view':'Open deal details','deal.notes':'Notes & details','deal.notesHint':'Write notes, reminders or details about this deal…','deal.notesSaved':'Notes saved.','deal.created':'Created','deal.mail':'Email','deal.call':'Call','deal.noPhone':'No phone number saved for this customer.',
  'field.company':'Customer','field.contactPerson':'Contact person','field.contactEmail':'Contact email',
  'customers.company':'Companies','customers.private':'Private customers','field.email':'Email','field.phone':'Phone',
  'nav.customize':'Customize menu','nav.newGroup':'New group','nav.saved':'Menu saved.','nav.up':'Move up','nav.down':'Move down','nav.drag':'Hold and drag to move',
  'field.valid':'Valid until','field.total':'Total',
  'email.sub':'Inbox and sending via your own email server (IMAP/SMTP).',
  'email.serverUrl':'Server URL','email.refresh':'Refresh','email.send':'Send email','email.inbox':'Inbox',
  'email.notConnected':'The email server is not running. Start it on your computer (<b>start-email-server.bat</b>) and open <b>http://127.0.0.1:8787/setup</b> to connect your account.',
  'email.notConfigured':'No account connected yet — open <b>http://127.0.0.1:8787/setup</b> in your browser and enter your IMAP/SMTP details.',
  'email.empty':'Inbox is empty.',
  'email.loadFailed':'Could not load email: %s',
  'email.to':'To','email.subject':'Subject','email.body':'Message',
  'email.sent':'Email sent!','email.sendFailed':'Could not send: %s','email.sending':'Sending…',
  'email.quoteSubject':'Quote %s from Nimbus CRM','email.invoiceSubject':'Invoice %s from Nimbus CRM',
  'customer.back':'← Customer list','customer.noDeals':'No deals yet.','customer.noQuotes':'No quotes.','customer.noInvoices':'No invoices.','customer.noPayments':'No payments.','customer.noSubs':'No subscriptions.','customer.subs':'Subscriptions','customer.openVal':'%s open pipeline',
  'opt.none':'— none —','alert.client':'Enter a contact person name.',
  'quotes.sub':'Draft → Sent → Accepted. Accepting a quote can generate invoices automatically.',
  'th.number':'Number','th.client':'Client','th.status':'Status','th.created':'Created','th.valid':'Valid until','th.method':'Method',
  'th.total':'Total','th.invoices':'Invoices','quotes.empty':'No quotes yet.',
  'newQuote.title':'New quote','field.linkedDeal':'Linked deal','field.tax':'VAT / tax %','field.lines':'Line items',
  'th.description':'Description','th.qty':'Qty','th.unit':'Unit price','btn.addLine':'+ Add line',
  'btn.createQuote':'Create quote','alert.lines':'Add at least one line item with a description and quantity.',
  'quote.head':'Quote %s','quote.status':'Status','field.current':'Current','field.created':'Created',
  'quote.invFrom':'Invoices from this quote','quote.noneYet':'None yet.',
  'doc.offer':'Offer %s','doc.issued':'Issued %s · valid until %s','doc.prepared':'Prepared for',
  'doc.subtotal':'Subtotal','doc.vat':'VAT %s%','doc.total':'Total',
  'doc.terms':'Payment terms: 14 days. Prices exclude travel. This is a demo document — not a binding offer.',
  'bill.title':'Bill %s — %s','bill.banner':'Quote accepted. The workflow rule offers to raise invoices now — pick how this deal should be billed.',
  'bill.plan':'Billing plan','bill.one':'One invoice for the full amount',
  'bill.milestone':'Milestones — 50% deposit / 25% / 25% final','bill.third':'Three equal invoices',
  'bill.sub':'Recurring subscription (retainer)','bill.due':'First due date',
  'bill.send':'Send immediately','bill.sendYes':'Yes — mark as sent','bill.sendNo':'No — keep as draft',
  'bill.amount':'Amount per cycle','bill.cycle':'Cycle',
  'cycle.monthly':'Monthly','cycle.quarterly':'Quarterly','cycle.yearly':'Yearly',
  'bill.subNote':'In the real build this is where a Stripe subscription would be created and invoices raised automatically each cycle.',
  'lbl.full':'Full amount','lbl.inv1of3':'Invoice 1 of 3','lbl.inv2of3':'Invoice 2 of 3','lbl.inv3of3':'Invoice 3 of 3',
  'lbl.dep50':'Deposit 50%','lbl.mil25':'Milestone 25%','lbl.fin25':'Final 25%',
  'invoices.sub':'%s outstanding · payments here are simulated',
  'th.fromQuote':'From quote','th.issued':'Issued','th.due':'Due','th.paid':'Paid',
  'invoices.empty':'No invoices yet — accept a quote to generate some.',
  'toast.invSent':'%s marked as sent.',
  'pay.title':'Take payment — %s',
  'pay.banner':'Simulated checkout. No gateway is called and no card details are collected or needed. In the real build this hands off to Stripe/PayPal and the webhook writes the payment back here.',
  'field.amount':'Amount','field.method':'Method','method.card':'Card (demo)','method.bank':'Bank transfer (demo)',
  'method.net30':'Invoice/Net 30 (demo)','field.date':'Date','alert.amount':'Enter an amount greater than zero.',
  'payments.sub':'%s simulated transaction(s) · %s collected',
  'th.date':'Date','th.invoice':'Invoice','th.ref':'Reference','payments.empty':'No payments recorded.',
  'sub.retainerName':'retainer',
  'auto.sub':'Every rule that fired in this demo session','auto.activity':'Activity','auto.rules':'Rules in this demo',
  'auto.r1':'Quote sent → follow-up scheduled in 3 days',
  'auto.r2':'Quote accepted → deal marked Won + invoices offered',
  'auto.r3':'Invoice past due → reminder logged',
  'auto.r4':'Subscription due → next cycle invoice raised',
  'auto.r5':'Payment covers invoice total → invoice marked Paid',
  'auto.note':'Real emails, webhooks and scheduled jobs replace this loop in production — the trigger points stay identical.',
  'portal.sub':'What %s would see when logging in',
  'portal.banner':'This is the customer-facing side of the same demo data. Accepting a quote or paying an invoice here updates the internal records instantly — no email, no gateway.',
  'portal.offers':'Your offers','th.offer':'Offer','portal.noOffers':'No offers to review.',
  'portal.invoices':'Your invoices','th.for':'For','portal.paidThanks':'Paid — thank you',
  'portal.nothing':'Nothing outstanding.',
  'notFound.title':'Not found','notFound.body':'That record no longer exists.',
  'owner.you':'You','toast.lang':'Language switched.','toast.reset':'Demo data reset.','toast.curr':'Currency changed. 1 USD = %s.',
  'confirm.reset':'Reset the demo back to its seeded sample data? Anything you added here will be discarded.',
  'log.quoteSent':'Quote %s "sent" to %s (simulated — no email left your browser)',
  'log.followup':'Automation: follow-up on %s scheduled for %s','toast.quoteSent':'%s marked as sent. Nothing was actually emailed.',
  'log.quoteRejected':'Quote %s rejected','log.quoteAccepted':'Quote %s accepted by %s',
  'log.dealWon':'Deal "%s" won via %s','log.dealMoved':'Deal "%s" moved to %s',
  'log.dealCreated':'Deal "%s" created for %s','log.dealDeleted':'Deal "%s" deleted',
  'log.quoteDrafted':'Quote %s drafted for %s · %s',
  'toast.quoteDrafted':'%s created as a draft.',
  'log.invGen':'%s invoice(s) generated from %s (%s)','toast.invCreated':'%s invoice(s) created.',
  'log.subCreated':'Subscription created: %s · %s %s · next %s','toast.subCreated':'Subscription created (simulated).',
  'log.invSent':'Invoice %s sent to %s (simulated)',
  'log.invPaid':'Invoice %s fully paid','log.partial':'Partial payment on %s: %s',
  'log.payment':'Payment recorded: %s · %s · %s','toast.payment':'Payment of %s recorded (simulated).',
  'log.subPaused':'Subscription "%s" paused','log.subResumed':'Subscription "%s" resumed',
  'log.reminder':'Automation: reminder sent for overdue %s · %s · %s',
  'log.expired':'Automation: %s expired past its validity date and was closed',
  'log.invRaised':'Automation: %s raised for subscription "%s" · next cycle %s',
  'log.nothing':'Automation run: nothing to do.','toast.autoFired':'%s automation action(s) fired.',
  'toast.autoDone':'Automations ran — nothing due.','log.clock':'Demo clock advanced %s days → %s',
  'log.seed.qSent':'Quote %s sent to %s','auto.overdueTask':'Invoice %s is overdue (%s) — contact the customer.',
  'log.seed.qAccepted':'%s accepted — 3 milestone invoices generated automatically',
  'log.seed.pay':'Payment received: %s · %s',
  'log.seed.qSentFup':'Quote %s sent to %s · follow-up scheduled in 3 days',
  'nav.users':'Users','side.logout':'Log out',
  'login.title':'Log in','login.email':'Email','login.pass':'Password','login.btn':'Log in',
  'login.hint':'Accounts are created by an administrator.','login.err':'Wrong email or password.',
  'users.title':'Users','users.sub':'Manage who can sign in and what they see',
  'users.invite':'Invite user','users.email':'Email','users.name':'Name','users.role':'Role',
  'users.roleAdmin':'Admin','users.roleUser':'User','users.companies':'Can see companies','users.all':'all',
  'users.edit':'Edit','users.resetPass':'Reset password','users.delete':'Delete',
  'users.confirmDelete':'Delete this user? They lose access immediately.','users.inviteTitle':'Invite a new user',
  'users.password':'Password','users.generated':'(generated)','users.editTitle':'Edit user',
  'users.passHint':'The user signs in with this password.','users.invited':'User invited.',
  'users.updated':'User updated.','users.passReset':'Password reset.','users.deleted':'User deleted.',
  'users.err':'Something went wrong: %s','users.noCompanies':'No companies yet — create some first.'
},
sv: {
  'app.title':'Nimbus CRM – Demo',
  'nav.dashboard':'Översikt','nav.pipeline':'Pipeline','nav.companies':'Kundlista',
  'nav.quotes':'Offerter','nav.invoices':'Fakturor',
  'nav.payments':'Betalningar','nav.automation':'Automatiseringslogg','nav.portal':'Kundportal','nav.email':'E-post','nav.tasks':'Uppgifter','nav.lost':'Förlorade affärer',
  'lost.sub':'Affärer som flyttats till Förlorad lämnar pipelinen efter 24 timmar och hamnar här.','lost.empty':'Inga förlorade affärer.','lost.archived':'Arkiverad','lost.leaves':'Lämnar snart pipelinen','lost.restored':'Affären återställdes.','lost.total':'%s totalt förlorat','lost.left':'Lämnar pipelinen om %s h %s min',
  'log.dealLost':'Affär "%s" förlorad (offert %s avvisad)',
  'task.sub':'Påminnelser kopplade till kunder och affärer.','task.todo':'Att göra','task.new':'Ny uppgift','task.title':'Titel','task.due':'Förfaller','task.done':'Klar','task.open':'Öppna uppgifter',
  'task.empty':'Inga uppgifter ännu.','task.created':'Uppgift skapad.','task.updated':'Uppgift uppdaterad.','task.deleted':'Uppgift borttagen.',
  'task.overdue':'Förfallen','task.today':'Idag','task.allDone':'Alla uppgifter är klara 🎉',
  'confirm.delTask':'Ta bort uppgiften "%s"?',
  'notif.invoice':'Faktura %s är förfallen','notif.deal':'%s — förväntad stängning passerad','notif.task':'Uppgiften "%s" är förfallen','notif.none':'Inga notiser 🎉','notif.title':'Notiser',
  'grp.sales':'Försäljning','grp.revenue':'Intäkter','grp.system':'System',
  'side.demo':'Demoversion — data ligger i din Supabase-databas. Inga riktiga mejl, inga riktiga betalningar.',
  'side.reset':'Återställ demodata',
  'cur.tip':'Visningsvaluta','cur.USD':'USD — Amerikansk dollar','cur.SEK':'SEK — Svensk krona','cur.NOK':'NOK — Norsk krona','cur.DKK':'DKK — Dansk krona','cur.EUR':'EUR — Euro',
  'theme.light':'Byt till ljust tema','theme.dark':'Byt till mörkt tema',
  'nav.profile':'Profil',
  'profile.sub':'Ditt konto och dina inställningar','profile.account':'Konto','profile.email':'E-post',
  'profile.role':'Roll','profile.companies':'Företag','profile.name':'Namn',
  'profile.preferences':'Inställningar','profile.lang':'Språk','profile.currency':'Valuta','profile.theme':'Tema',
  'profile.security':'Säkerhet','profile.newPassword':'Nytt lösenord','profile.changePassword':'Byt lösenord',
  'profile.nameSaved':'Namn uppdaterat.','profile.passwordChanged':'Lösenord uppdaterat.',
  'profile.pwShort':'Lösenordet måste vara minst 6 tecken.',
  'st.New':'Ny','st.Contacted':'Kontaktad','st.Proposal':'Offert',
  'st.Won':'Vunnen','st.Lost':'Förlorad','st.Draft':'Utkast','st.Sent':'Skickad','st.Opened':'Öppnad',
  'st.Accepted':'Accepterad','st.Paid':'Betald','st.Active':'Aktiv','st.Rejected':'Avvisad',
  'st.Overdue':'Förfallen','st.Cancelled':'Avbruten','st.Void':'Makulerad',
  'btn.save':'Spara','btn.cancel':'Avbryt','btn.send':'Skicka','btn.open':'Öppna','btn.delete':'Ta bort',
  'btn.view':'Visa','btn.accept':'Acceptera','btn.decline':'Avböj','btn.quote':'Offert',
  'btn.newDeal':'Ny affär','btn.newQuote':'Ny offert',
  'btn.runAuto':'Kör automatiseringar','btn.advance':'Flytta fram 7 dagar','btn.takePay':'Ta emot betalning',
  'btn.markAccept':'Markera accepterad','btn.markReject':'Markera avvisad','btn.genInv':'Generera fakturor',
  'btn.clientView':'Kundvy','btn.sendRemind':'Skicka påminnelser','btn.runNow':'Kör nu',
  'btn.payNow':'Betala nu (demo)','btn.create':'Skapa','btn.add':'Lägg till',
  'btn.board':'Tavla','btn.openBoard':'Öppna tavla','btn.sendToClient':'Skicka till kund',
  'btn.back':'← Alla offerter',
  'btn.billingCycle':'Kör faktureringscykel','btn.pause':'Pausa','btn.resume':'Återuppta','btn.recordPay':'Registrera betalning',
  'dash.sub':'Demodatum: <b>%s</b> · %s kunder · %s öppna affärer',
  'dash.banner':'Demoläge. Data ligger i din Supabase-databas — offerter mejlas inte, fakturor skickas inte och "betalningar" är simulerade. Använd <b>Kör automatiseringar</b> och <b>Flytta fram 7 dagar</b> för att se reglerna utlösas.',
  'kpi.open':'Öppen pipeline','kpi.open.d':'%s affärer på gång',
  'kpi.won':'Vunnet denna period','kpi.won.d':'stängda / accepterade',
  'kpi.out':'Utestående','kpi.out.d':'%s förfallna fakturor',
  'kpi.col':'Insamlat','kpi.col.d':'simulerade betalningar',
  'kpi.mrr':'Återkommande (MRR)','kpi.mrr.d':'%s aktiva prenumerationer',
  'dash.pipe':'Pipeline per stadie','dash.act':'Senaste aktivitet','dash.attn':'Kräver åtgärd',
  'log.empty':'Inget ännu.','attn.clear':'Allt är lugnt. Inget förfallet eller väntande.',
  'attn.overdue':'Förfallen faktura','attn.quoteWait':'Offert väntar på svar','attn.quoteValid':'giltig till %s',
  'attn.draft':'Offertutkast ej skickat','attn.draftCreated':'skapad %s',
  'attn.dealLate':'Affär förbi slutdatum','attn.expected':'förväntad %s',
  'th.what':'Vad','th.record':'Post','th.amount':'Belopp','th.when':'När',
  'pipeline.sub':'Dra kort mellan stadier · %s öppna',
  'board.compact':'Kompakt','board.roomy':'Stor',
  'companies.sub':'Privat- och företagskunder','companies.empty':'Inga kunder ännu.',
  'companies.undo':'Ångra',
  'nav.trash':'Papperskorg','trash.sub':'Borttagna kunder — återställ eller radera för alltid.','trash.empty':'Papperskorgen är tom.',
  'trash.restore':'Återställ','trash.purge':'Radera för alltid','trash.restored':'Kunden återställdes.','trash.purged':'Raderat för alltid.','trash.at':'Raderad',
  'field.industry':'Bransch','confirm.purgeTrash':'Radera "%s" och all dess data för alltid? Detta kan inte ångras.',
  'field.name':'Namn',
  'toast.companyCreated':'Kund tillagd.','toast.companyUpdated':'Kund uppdaterad.','toast.companyDeleted':'Kund borttagen.','toast.undo':'Klart — allt återställt.',
  'list.search':'Sök…','list.all':'Alla statusar','list.none':'Inga träffar.',
  'btn.newCompany':'Ny företagskund','btn.newPerson':'Ny privatkund','btn.edit':'Ändra','btn.print':'Skriv ut','btn.preview':'Förhandsvisa','btn.viewQuote':'Visa offert',
  'th.industry':'Bransch','th.deals':'Affärer','th.value':'Värde','th.name':'Namn',
  'doc.invoice':'Faktura %s','doc.due':'Förfaller %s',
  'confirm.delDeal':'Ta bort affären "%s"? (endast demodata)',
  'field.dealName':'Affärsnamn','field.value':'Värde','field.stage':'Stadie',
  'field.close':'Förväntad stängning','btn.createDeal':'Skapa affär','toast.dealCreated':'Affär skapad.','toast.dealUpdated':'Affären uppdaterad.',
  'deal.newCustomer':'Ny kund','deal.nameRequired':'Ange ett namn.','deal.view':'Öppna affärsdetaljer','deal.notes':'Notiser & detaljer','deal.notesHint':'Skriv notiser, påminnelser eller detaljer om affären…','deal.notesSaved':'Notiser sparade.','deal.created':'Skapad','deal.mail':'Maila','deal.call':'Ring','deal.noPhone':'Inget telefonnummer sparat för kunden.',
  'field.company':'Kund','field.contactPerson':'Kontaktperson','field.contactEmail':'E-post',
  'customers.company':'Företagskunder','customers.private':'Privatkunder','field.email':'E-post','field.phone':'Telefon',
  'nav.customize':'Anpassa meny','nav.newGroup':'Ny kategori','nav.saved':'Menyn sparad.','nav.up':'Flytta upp','nav.down':'Flytta ner','nav.drag':'Håll inne och dra för att flytta',
  'field.valid':'Giltig till','field.total':'Totalt',
  'email.sub':'Inkorg och utskick via din egen e-postserver (IMAP/SMTP).',
  'email.serverUrl':'Serveradress','email.refresh':'Uppdatera','email.send':'Skicka e-post','email.inbox':'Inkorg',
  'email.notConnected':'E-postservern är inte igång. Starta den på datorn (<b>start-email-server.bat</b>) och öppna <b>http://127.0.0.1:8787/setup</b> för att koppla ditt konto.',
  'email.notConfigured':'Inget konto kopplat ännu — öppna <b>http://127.0.0.1:8787/setup</b> i webbläsaren och ange dina IMAP/SMTP-uppgifter.',
  'email.empty':'Inkorgen är tom.',
  'email.loadFailed':'Kunde inte hämta e-post: %s',
  'email.to':'Till','email.subject':'Ämne','email.body':'Meddelande',
  'email.sent':'E-post skickad!','email.sendFailed':'Kunde inte skicka: %s','email.sending':'Skickar…',
  'email.quoteSubject':'Offert %s från Nimbus CRM','email.invoiceSubject':'Faktura %s från Nimbus CRM',
  'customer.back':'← Kundlistan','customer.noDeals':'Inga affärer ännu.','customer.noQuotes':'Inga offerter.','customer.noInvoices':'Inga fakturor.','customer.noPayments':'Inga betalningar.','customer.noSubs':'Inga prenumerationer.','customer.subs':'Prenumerationer','customer.openVal':'%s i öppen pipeline',
  'opt.none':'— ingen —','alert.client':'Ange en kontaktperson.',
  'quotes.sub':'Utkast → Skickad → Accepterad. Att acceptera en offert kan generera fakturor automatiskt.',
  'th.number':'Nummer','th.client':'Kund','th.status':'Status','th.created':'Skapad','th.valid':'Giltig till','th.method':'Metod',
  'th.total':'Totalt','th.invoices':'Fakturor','quotes.empty':'Inga offerter ännu.',
  'newQuote.title':'Ny offert','field.linkedDeal':'Kopplad affär','field.tax':'Moms %','field.lines':'Radartiklar',
  'th.description':'Beskrivning','th.qty':'Antal','th.unit':'Styckpris','btn.addLine':'+ Lägg till rad',
  'btn.createQuote':'Skapa offert','alert.lines':'Lägg till minst en radartikel med beskrivning och antal.',
  'quote.head':'Offert %s','quote.status':'Status','field.current':'Nuvarande','field.created':'Skapad',
  'quote.invFrom':'Fakturor från denna offert','quote.noneYet':'Inga ännu.',
  'doc.offer':'Offert %s','doc.issued':'Utfärdad %s · giltig till %s','doc.prepared':'Upprättad för',
  'doc.subtotal':'Delsumma','doc.vat':'Moms %s%','doc.total':'Totalt',
  'doc.terms':'Betalningsvillkor: 14 dagar. Priser exkl. resor. Detta är ett demodokument — inte ett bindande erbjudande.',
  'bill.title':'Fakturera %s – %s','bill.banner':'Offert accepterad. Arbetsflödesregeln erbjuder att skapa fakturor nu — välj hur denna affär ska faktureras.',
  'bill.plan':'Faktureringsplan','bill.one':'En faktura för hela beloppet',
  'bill.milestone':'Milstenar — 50% förskott / 25% / 25% slut','bill.third':'Tre lika fakturor',
  'bill.sub':'Återkommande prenumeration (retainer)','bill.due':'Första förfallodatum',
  'bill.send':'Skicka direkt','bill.sendYes':'Ja — markera som skickad','bill.sendNo':'Nej — behåll som utkast',
  'bill.amount':'Belopp per cykel','bill.cycle':'Cykel',
  'cycle.monthly':'Månadsvis','cycle.quarterly':'Kvartalsvis','cycle.yearly':'Årligen',
  'bill.subNote':'I den riktiga versionen skapas här en Stripe-prenumeration och fakturor utfärdas automatiskt varje cykel.',
  'lbl.full':'Hela beloppet','lbl.inv1of3':'Faktura 1 av 3','lbl.inv2of3':'Faktura 2 av 3','lbl.inv3of3':'Faktura 3 av 3',
  'lbl.dep50':'Förskott 50%','lbl.mil25':'Milsten 25%','lbl.fin25':'Slutbetalning 25%',
  'invoices.sub':'%s utestående · betalningar här är simulerade',
  'th.fromQuote':'Från offert','th.issued':'Utfärdad','th.due':'Förfallen','th.paid':'Betald',
  'invoices.empty':'Inga fakturor ännu — acceptera en offert för att generera några.',
  'toast.invSent':'%s markerad som skickad.',
  'pay.title':'Ta emot betalning – %s',
  'pay.banner':'Simulerad kassa. Ingen betalväg anropas och inga kortuppgifter samlas in eller behövs. I den riktiga versionen lämnas detta över till Stripe/PayPal och webhooken skriver tillbaka betalningen hit.',
  'field.amount':'Belopp','field.method':'Metod','method.card':'Kort (demo)','method.bank':'Banköverföring (demo)',
  'method.net30':'Faktura/Netto 30 (demo)','field.date':'Datum','alert.amount':'Ange ett belopp större än noll.',
  'payments.sub':'%s simulerade transaktioner · %s insamlat',
  'th.date':'Datum','th.invoice':'Faktura','th.ref':'Referens','payments.empty':'Inga betalningar registrerade.',
  'sub.retainerName':'retaineravtal',
  'auto.sub':'Varje regel som utlösts i denna demosession','auto.activity':'Aktivitet','auto.rules':'Regler i denna demo',
  'auto.r1':'Offert skickad → uppföljning schemalagd om 3 dagar',
  'auto.r2':'Offert accepterad → affär markerad Vunnen + fakturor erbjuds',
  'auto.r3':'Faktura förfallen → påminnelse loggas',
  'auto.r4':'Prenumeration förfallen → nästa cykels faktura utfärdas',
  'auto.r5':'Betalning täcker fakturabeloppet → faktura markeras Betald',
  'auto.note':'Riktiga mejl, webhooks och schemalagda jobb ersätter denna loop i produktion — utlösningspunkterna förblir identiska.',
  'portal.sub':'Vad %s skulle se när de loggar in',
  'portal.banner':'Detta är kundsidan av samma demodata. Att acceptera en offert eller betala en faktura här uppdaterar de interna posterna direkt — ingen e-post, ingen betalväg.',
  'portal.offers':'Dina offerter','th.offer':'Offert','portal.noOffers':'Inga offerter att granska.',
  'portal.invoices':'Dina fakturor','th.for':'Avser','portal.paidThanks':'Betald — tack!',
  'portal.nothing':'Inget utestående.',
  'notFound.title':'Hittades inte','notFound.body':'Den posten finns inte längre.',
  'owner.you':'Du','toast.lang':'Språk bytt.','toast.reset':'Demodata återställd.','toast.curr':'Valuta ändrad. 1 USD = %s.',
  'confirm.reset':'Återställ demon till dess ursprungliga exempeldata? Allt du lagt till här försvinner.',
  'log.quoteSent':'Offert %s "skickad" till %s (simulerat — ingen e-post lämnade din webbläsare)',
  'log.followup':'Automatisering: uppföljning på %s schemalagd till %s','toast.quoteSent':'%s markerad som skickad. Inget mejlades faktiskt.',
  'log.quoteRejected':'Offert %s avvisad','log.quoteAccepted':'Offert %s accepterad av %s',
  'log.dealWon':'Affär "%s" vunnen via %s','log.dealMoved':'Affär "%s" flyttad till %s',
  'log.dealCreated':'Affär "%s" skapad för %s','log.dealDeleted':'Affär "%s" borttagen',
  'log.quoteDrafted':'Offert %s utkast för %s · %s',
  'toast.quoteDrafted':'%s skapad som utkast.',
  'log.invGen':'%s fakturor genererade från %s (%s)','toast.invCreated':'%s fakturor skapade.',
  'log.subCreated':'Prenumeration skapad: %s · %s %s · nästa %s','toast.subCreated':'Prenumeration skapad (simulerad).',
  'log.invSent':'Faktura %s skickad till %s (simulerat)',
  'log.invPaid':'Faktura %s helt betald','log.partial':'Delbetalning på %s: %s',
  'log.payment':'Betalning registrerad: %s · %s · %s','toast.payment':'Betalning på %s registrerad (simulerad).',
  'log.subPaused':'Prenumeration "%s" pausad','log.subResumed':'Prenumeration "%s" återupptagen',
  'log.reminder':'Automatisering: påminnelse skickad för förfallen %s · %s · %s',
  'log.expired':'Automatisering: %s gick ut efter sitt giltighetsdatum och stängdes',
  'log.invRaised':'Automatisering: %s utfärdad för prenumeration "%s" · nästa cykel %s',
  'log.nothing':'Automatisering kördes: inget att göra.','toast.autoFired':'%s automatiseringsåtgärder utlöstes.',
  'toast.autoDone':'Automatiseringar kördes — inget förfallet.','log.clock':'Demoklockan flyttades fram %s dagar → %s',
  'log.seed.qSent':'Offert %s skickad till %s','auto.overdueTask':'Faktura %s är förfallen (%s) — kontakta kunden.',
  'log.seed.qAccepted':'%s accepterad — 3 milstensfakturor genererade automatiskt',
  'log.seed.pay':'Betalning mottagen: %s · %s',
  'log.seed.qSentFup':'Offert %s skickad till %s · uppföljning schemalagd om 3 dagar',
  'nav.users':'Användare','side.logout':'Logga ut',
  'login.title':'Logga in','login.email':'E-post','login.pass':'Lösenord','login.btn':'Logga in',
  'login.hint':'Konton skapas av en administratör.','login.err':'Fel e-postadress eller lösenord.',
  'users.title':'Användare','users.sub':'Hantera vem som kan logga in och vad de ser',
  'users.invite':'Bjud in användare','users.email':'E-post','users.name':'Namn','users.role':'Roll',
  'users.roleAdmin':'Admin','users.roleUser':'Användare','users.companies':'Kan se företag','users.all':'alla',
  'users.edit':'Redigera','users.resetPass':'Återställ lösenord','users.delete':'Ta bort',
  'users.confirmDelete':'Ta bort denna användare? De förlorar åtkomsten direkt.','users.inviteTitle':'Bjud in ny användare',
  'users.password':'Lösenord','users.generated':'(genererat)','users.editTitle':'Redigera användare',
  'users.passHint':'Användaren loggar in med detta lösenord.','users.invited':'Användare inbjuden.',
  'users.updated':'Användare uppdaterad.','users.passReset':'Lösenord återställt.','users.deleted':'Användare borttagen.',
  'users.err':'Något gick fel: %s','users.noCompanies':'Inga företag ännu — skapa några först.'
}
};
const t = (k, ...p) => {
  const s = (STR[lang] && STR[lang][k]) || STR.en[k] || k;
  return p.length ? s.replace(/%[sd]/g, () => p.shift()) : s;
};
const setLang = l => {
  if(l === lang) return;
  lang = l;
  try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
  document.documentElement.lang = lang;
  paintLang(); route();
};
const toggleLang = () => {
  lang = lang === 'sv' ? 'en' : 'sv';
  try{ localStorage.setItem(LANG_KEY, lang); }catch(e){}
  document.documentElement.lang = lang;
  paintLang(); route(); toast(t('toast.lang'));
};
function changeCurr(v){
  if(!CUR[v]) return;
  curr = v;
  try{ localStorage.setItem('nimbus-curr', curr); }catch(e){}
  paintLang(); route(); toast(t('toast.curr', rateTxt(curr)));
}
/* ------------------------------ theme ------------------------------ */
let theme = (()=>{
  try{ const s = localStorage.getItem('nimbus-theme'); if(s==='light'||s==='dark') return s; }catch(e){}
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
})();
function applyTheme(){
  document.documentElement.dataset.theme = theme;
  const tip = t(theme==='dark' ? 'theme.light' : 'theme.dark');
  document.querySelectorAll('.themebtn').forEach(b => {
    b.textContent = theme==='dark' ? '☀️' : '🌙';
    b.title = tip; b.setAttribute('aria-label', tip);
  });
}
function toggleTheme(){
  theme = theme==='dark' ? 'light' : 'dark';
  try{ localStorage.setItem('nimbus-theme', theme); }catch(e){}
  applyTheme();
}
function setTheme(t){
  if(t === theme) return;
  theme = t;
  try{ localStorage.setItem('nimbus-theme', theme); }catch(e){}
  applyTheme();
}
/* ------------------------- collapsible sidebar groups ------------------------- */
function toggleGrp(g){
  const items = document.getElementById('grp-'+g);
  if(!items) return;
  const open = items.style.display !== 'none';
  items.style.display = open ? 'none' : '';
  const chev = document.querySelector(`.grp[data-grp="${g}"] .chev`);
  if(chev) chev.textContent = open ? '▸' : '▾';
  try{
    const s = JSON.parse(localStorage.getItem('nimbus-grp') || '{}');
    s[g] = open; /* true = collapsed (user just closed it) */
    localStorage.setItem('nimbus-grp', JSON.stringify(s));
  }catch(e){}
}
function initGroups(){
  let s = {};
  try{ s = JSON.parse(localStorage.getItem('nimbus-grp') || '{}'); }catch(e){}
  document.querySelectorAll('.grp-items').forEach(el => {
    const g = el.id.replace('grp-','');
    if(s[g] === true){
      el.style.display = 'none';
      const chev = document.querySelector(`.grp[data-grp="${g}"] .chev`);
      if(chev) chev.textContent = '▸';
    }
  });
}
/* ------------------------- customizable sidebar ------------------------- */
const NAV_LINKS = {
  pipeline:   {href:'#/pipeline',   i18n:'nav.pipeline',   count:'deals'},
  lost:       {href:'#/lost',       i18n:'nav.lost'},
  companies:  {href:'#/companies',  i18n:'nav.companies'},
  quotes:     {href:'#/quotes',     i18n:'nav.quotes',     count:'quotes'},
  invoices:   {href:'#/invoices',   i18n:'nav.invoices',   count:'invoices'},
  payments:   {href:'#/payments',   i18n:'nav.payments',   count:'payments'},
  email:      {href:'#/email',      i18n:'nav.email'},
  tasks:      {href:'#/tasks',      i18n:'nav.tasks'},
  automation: {href:'#/automation', i18n:'nav.automation'},
  profile:    {href:'#/profile',    i18n:'nav.profile'},
  users:      {href:'#/users',      i18n:'nav.users',      adminOnly:true},
  portal:     {href:'#/portal',     i18n:'nav.portal'},
  trash:      {href:'#/trash',      i18n:'nav.trash',      adminOnly:true},
};
const NAV_DEFAULT = [
  {id:'sales',  name:'Försäljning', items:['pipeline','lost','companies','quotes']},
  {id:'revenue',name:'Intäkter',    items:['invoices','payments']},
  {id:'system', name:'System',      items:['email','tasks','automation','profile','users','portal','trash']},
];
function navLayout(){
  let L = null;
  try{ L = JSON.parse(localStorage.getItem('nimbus-nav')); }catch(e){}
  if(!Array.isArray(L) || !L.length) L = NAV_DEFAULT.map(g=>({id:g.id, name:g.name, items:[...g.items]}));
  return L;
}
function saveNavLayout(L){ try{ localStorage.setItem('nimbus-nav', JSON.stringify(L)); }catch(e){} }
/* drag & drop straight in the sidebar: hold a group heading or a link and
   drop it onto another heading/group to move it */
let navDrag = null;
function navDragStart(e, kind, id, from){
  navDrag = {kind, id, from};
  if(e.dataTransfer){ e.dataTransfer.effectAllowed = 'move'; try{ e.dataTransfer.setData('text/plain', id); }catch(err){} }
}
function navDragOver(e){
  e.preventDefault();
  if(e.dataTransfer) e.dataTransfer.dropEffect = 'move';
  document.querySelectorAll('#nav .nav-over').forEach(x=>x.classList.remove('nav-over'));
  const el = e.currentTarget; if(el) el.classList.add('nav-over');
}
function navDragLeave(e){ const el = e.currentTarget; if(el) el.classList.remove('nav-over'); }
function navDragEnd(){ navDrag = null; document.querySelectorAll('#nav .nav-over').forEach(x=>x.classList.remove('nav-over')); }
function navDrop(e, kind, gid, itemId){
  if(e.preventDefault) e.preventDefault();
  document.querySelectorAll('#nav .nav-over').forEach(x=>x.classList.remove('nav-over'));
  if(!navDrag) return;
  const L = navLayout();
  if(navDrag.kind === 'grp'){
    if(kind === 'grp'){
      const from = L.findIndex(g=>g.id===navDrag.id);
      const to = L.findIndex(g=>g.id===gid);
      if(from>=0 && to>=0 && from!==to){
        const g = L.splice(from,1)[0];
        L.splice(to,0,g);
        saveNavLayout(L); buildNav();
      }
    }
  } else if(navDrag.kind === 'item'){
    const src = L.find(g=>g.id===navDrag.from);
    const tgt = L.find(g=>g.id===gid);
    if(src && tgt){
      src.items = src.items.filter(x=>x!==navDrag.id);
      let pos = (kind==='item' && itemId) ? tgt.items.indexOf(itemId) : -1;
      if(pos<0) pos = tgt.items.length;
      tgt.items.splice(pos, 0, navDrag.id);
      saveNavLayout(L); buildNav();
    }
  }
  navDrag = null;
}
function buildNav(){
  const nav = document.getElementById('nav'); if(!nav) return;
  const L = navLayout();
  let s = {};
  try{ s = JSON.parse(localStorage.getItem('nimbus-grp') || '{}'); }catch(e){}
  const adm = isAdmin();
  nav.innerHTML = L.map(g=>`
    <button class="grp" data-grp="${g.id}" draggable="true" title="${t('nav.drag')}"
      onclick="toggleGrp('${g.id}')"
      ondragstart="navDragStart(event,'grp','${g.id}')" ondragover="navDragOver(event)" ondragleave="navDragLeave(event)"
      ondrop="navDrop(event,'grp','${g.id}')" ondragend="navDragEnd()"><span>${esc(g.name)}</span><i class="chev">${s[g.id] ? '▸' : '▾'}</i></button>
    <div class="grp-items" id="grp-${g.id}" style="${s[g.id] ? 'display:none' : ''}"
      ondragover="navDragOver(event)" ondragleave="navDragLeave(event)" ondrop="navDrop(event,'grp','${g.id}')">
      ${g.items.map(id=>{
        const l = NAV_LINKS[id]; if(!l) return '';
        if(l.adminOnly && !adm) return '';
        return `<a href="${l.href}" draggable="true" title="${t('nav.drag')}"
          ondragstart="navDragStart(event,'item','${id}','${g.id}')" ondragover="navDragOver(event)" ondragleave="navDragLeave(event)"
          ondrop="navDrop(event,'item','${g.id}','${id}')" ondragend="navDragEnd()"><span data-i18n="${l.i18n}">${esc(t(l.i18n))}</span>${l.count ? `<span class="count" data-c="${l.count}"></span>` : ''}</a>`;
      }).join('')}
    </div>`).join('');
  paintCounts();
}
function customizeNav(){
  const L = navLayout();
  modal({title:t('nav.customize'), wide:true, ok:t('btn.save'), body:`
    <div style="margin-bottom:12px"><button class="sm primary" onclick="navAddGroup()">＋ ${t('nav.newGroup')}</button></div>
    ${L.map((g,gi)=>`
      <div class="card" style="padding:10px;margin-bottom:10px">
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
          <input id="ng-${gi}" value="${esc(g.name)}" style="flex:1;min-width:140px">
          <button class="sm" title="${t('nav.up')}" onclick="navMoveGroup(${gi},-1)">↑</button>
          <button class="sm" title="${t('nav.down')}" onclick="navMoveGroup(${gi},1)">↓</button>
          <button class="sm ghost danger" title="${t('btn.delete')}" onclick="navDelGroup(${gi})">🗑</button>
        </div>
        ${g.items.map((id,ii)=>`
          <div style="display:flex;gap:6px;align-items:center;margin-top:6px">
            <span style="flex:1;font-size:13px">${esc(t(NAV_LINKS[id] ? NAV_LINKS[id].i18n : id))}</span>
            <select onchange="navMoveItem('${g.id}','${id}',this.value)">
              ${L.map((x,xi)=>`<option value="${xi}" ${xi===gi?'selected':''}>${esc(x.name)}</option>`).join('')}
            </select>
            <button class="sm" title="${t('nav.up')}" onclick="navMoveItemUp('${g.id}','${id}')">↑</button>
            <button class="sm" title="${t('nav.down')}" onclick="navMoveItemDown('${g.id}','${id}')">↓</button>
          </div>`).join('')}
      </div>`).join('')}
  `, onSubmit(){
    const L2 = navLayout();
    L2.forEach((g,i)=>{
      const el = document.getElementById('ng-'+i);
      if(el && el.value.trim()) g.name = el.value.trim();
    });
    saveNavLayout(L2);
    toast(t('nav.saved'));
    buildNav();
    return true;
  }});
}
function navRerender(){ if(document.getElementById('mform')) customizeNav(); }
function navAddGroup(){
  const L = navLayout();
  L.push({id:'g'+Date.now().toString(36), name:t('nav.newGroup'), items:[]});
  saveNavLayout(L); navRerender();
}
function navDelGroup(gi){
  const L = navLayout(); L.splice(gi,1); saveNavLayout(L); navRerender();
}
function navMoveGroup(gi,dir){
  const L = navLayout(); const j = gi+dir;
  if(j<0 || j>=L.length) return;
  const t2 = L[gi]; L[gi] = L[j]; L[j] = t2;
  saveNavLayout(L); navRerender();
}
function navMoveItem(gid,id,gi2){
  const L = navLayout();
  const g = L.find(x=>x.id===gid); if(!g || gi2<0 || gi2>=L.length) return;
  g.items = g.items.filter(x=>x!==id);
  if(!L[gi2].items.includes(id)) L[gi2].items.push(id);
  saveNavLayout(L); navRerender();
}
function navMoveItemUp(gid,id){
  const L = navLayout(); const g = L.find(x=>x.id===gid); if(!g) return;
  const i = g.items.indexOf(id);
  if(i>0){ const t2 = g.items[i]; g.items[i] = g.items[i-1]; g.items[i-1] = t2; saveNavLayout(L); navRerender(); }
}
function navMoveItemDown(gid,id){
  const L = navLayout(); const g = L.find(x=>x.id===gid); if(!g) return;
  const i = g.items.indexOf(id);
  if(i>=0 && i<g.items.length-1){ const t2 = g.items[i]; g.items[i] = g.items[i+1]; g.items[i+1] = t2; saveNavLayout(L); navRerender(); }
}
function paintLang(){
  document.title = t('app.title');
  document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
  const lb = document.getElementById('langbtn');
  if(lb){
    lb.textContent = lang === 'sv' ? 'EN' : 'SV';
    lb.title = lang === 'sv' ? 'Switch to English' : 'Byt till svenska';
  }
  const cs = document.getElementById('currsel');
  if(cs){
    cs.title = t('cur.tip') + ' — 1 USD = ' + rateTxt(curr);
    cs.innerHTML = Object.keys(CUR).map(c=>`<option value="${c}" ${c===curr?'selected':''}>${esc(t('cur.'+c))}</option>`).join('');
  }
  applyTheme();
}

const STAGES = ['New','Contacted','Proposal','Won','Lost'];
/* currencies — display only; the demo data stays in USD-denominated numbers */
const CUR = {
  USD:{code:'USD',locale:'en-US',display:'narrowSymbol'},
  SEK:{code:'SEK',locale:'sv-SE',display:'narrowSymbol'},
  NOK:{code:'NOK',locale:'nb-NO',display:'code'},
  DKK:{code:'DKK',locale:'da-DK',display:'narrowSymbol'},
  EUR:{code:'EUR',locale:'fi-FI',display:'narrowSymbol'},
};
let curr = 'SEK';
try{ curr = localStorage.getItem('nimbus-curr') || 'SEK'; }catch(e){}
if(!CUR[curr]) curr = 'SEK';
let custMode = 'company';   /* customer list mode: 'company' | 'person' */
try{ const m = localStorage.getItem('nimbus-cust'); if(m==='company'||m==='person') custMode = m; }catch(e){}
/* exchange rates — live fetch (open.er-api.com, no key) with a localStorage cache.
   All db values stay in USD; money() converts at render time with the current rate.
   The fallback table keeps the demo working fully offline; it is replaced on the
   first successful fetch. */
const FALLBACK_RATES = { USD:1, SEK:9.5333, NOK:9.4122, DKK:6.4583, EUR:0.8639 };
const RATES_KEY = 'nimbus-rates';
let rates = Object.assign({}, FALLBACK_RATES);
try{
  const c = localStorage.getItem(RATES_KEY);
  if(c){ const p = JSON.parse(c); if(p && p.rates && p.rates.SEK) rates = Object.assign({}, FALLBACK_RATES, p.rates); }
}catch(e){}
const rateOf = c => rates[c] || 1;
const rateTxt = c => new Intl.NumberFormat(CUR[c].locale,{minimumFractionDigits:2,maximumFractionDigits:2}).format(rateOf(c)) + ' ' + c;
async function fetchRates(){
  try{
    const r = await fetch('https://open.er-api.com/v6/latest/USD');
    const j = await r.json();
    if(j && j.result==='success' && j.rates && j.rates.SEK){
      const merged = { USD:1 };
      ['SEK','NOK','DKK','EUR'].forEach(c => { if(j.rates[c]) merged[c] = j.rates[c]; });
      rates = merged;
      try{ localStorage.setItem(RATES_KEY, JSON.stringify({at:new Date().toISOString(), rates: merged})); }catch(e){}
      route(); paintLang(); /* re-render with live rates */
    }
  }catch(e){ /* offline — cached/fallback rates keep the demo working */ }
}
const money = n => new Intl.NumberFormat(CUR[curr].locale,{style:'currency',currency:CUR[curr].code,
  currencyDisplay:CUR[curr].display,minimumFractionDigits:2}).format(Math.round(n*100*rateOf(curr))/100);
const uid = p => p + '_' + Math.random().toString(36).slice(2,8);
const today = () => new Date(db.clock);
const iso = d => new Date(d).toISOString().slice(0,10);
const days = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return iso(x); };
const addMonth = d => { const x = new Date(d); x.setMonth(x.getMonth()+1); return iso(x); };
const fmtDate = s => new Date(s+'T00:00:00').toLocaleDateString(lang==='sv'?'sv-SE':'en-US',{month:'short',day:'numeric',year:'numeric'});
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const init = s => String(s).split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
const methodTxt = m => ({'Card (demo)':t('method.card'),'Bank transfer (demo)':t('method.bank'),'Invoice/Net 30 (demo)':t('method.net30')}[m] || m);
const ownerTxt = o => o === 'You' ? t('owner.you') : o;
const logText = l => l.k ? t(l.k, ...(l.p||[]).map(x => Array.isArray(x) ? t(x[0]) : (x && typeof x==='object' && 'v' in x) ? money(x.v) : x)) : (l.text||'');

let db;

/* ------------------------------ seed data ------------------------------ */
function seed(){
  const base = '2026-08-19';
  const d = {
    clock: base,
    companies: [
      {id:'co_1',name:'Northwind Industrial',industry:'Manufacturing'},
      {id:'co_2',name:'Larsson Bygg AB',industry:'Construction'},
      {id:'co_3',name:'Helios Energy',industry:'Renewables'},
      {id:'co_4',name:'Kvist Logistics',industry:'Transport'},
      {id:'co_5',name:'Meridian Dental',industry:'Healthcare'},
    ],
    deals: [
      {id:'dl_1',title:'Line-2 retrofit',companyId:'co_1',contactName:'Anna Lind',contactEmail:'anna.lind@northwind.example',value:48000,stage:'Proposal',close:days(base,12),created:days(base,-40)},
      {id:'dl_2',title:'Site safety package',companyId:'co_2',contactName:'Marcus Larsson',contactEmail:'marcus@larssonbygg.example',value:16500,stage:'Won',close:days(base,-6),created:days(base,-38)},
      {id:'dl_3',title:'Rooftop array — phase 1',companyId:'co_3',contactName:'Priya Raman',contactEmail:'priya@helios.example',value:92000,stage:'Proposal',close:days(base,34),created:days(base,-25)},
      {id:'dl_4',title:'Fleet tracking rollout',companyId:'co_4',contactName:'Tomas Kvist',contactEmail:'tomas@kvistlog.example',value:27400,stage:'Contacted',close:days(base,21),created:days(base,-17)},
      {id:'dl_5',title:'Clinic booking system',companyId:'co_5',contactName:'Dr. Elena Vos',contactEmail:'elena@meridiandental.example',value:11200,stage:'New',close:days(base,45),created:days(base,-8)},
      {id:'dl_6',title:'Spare parts contract',companyId:'co_1',contactName:'Jonas Berg',contactEmail:'jonas.berg@northwind.example',value:8400,stage:'Lost',close:days(base,-2),created:days(base,-14),lostAt:new Date(Date.now()-2*86400000).toISOString()},
    ],
    quotes: [
      {id:'qt_1',no:'Q-1041',dealId:'dl_2',companyId:'co_2',contactName:'Marcus Larsson',contactEmail:'marcus@larssonbygg.example',status:'Accepted',created:days(base,-20),valid:days(base,10),tax:25,
       items:[{desc:'Safety audit & documentation',qty:1,price:6500},{desc:'On-site training (per day)',qty:2,price:2500},{desc:'Signage kit',qty:1,price:5000}]},
      {id:'qt_2',no:'Q-1042',dealId:'dl_1',companyId:'co_1',contactName:'Anna Lind',contactEmail:'anna.lind@northwind.example',status:'Sent',created:days(base,-6),valid:days(base,14),tax:25,
       items:[{desc:'Retrofit engineering',qty:1,price:28000},{desc:'Control cabinet',qty:2,price:7500},{desc:'Commissioning',qty:1,price:5000}]},
      {id:'qt_3',no:'Q-1043',dealId:'dl_4',companyId:'co_4',contactName:'Tomas Kvist',contactEmail:'tomas@kvistlog.example',status:'Draft',created:days(base,-1),valid:days(base,21),tax:25,
       items:[{desc:'Tracker units',qty:40,price:520},{desc:'Installation',qty:1,price:4200},{desc:'Platform licence (yr 1)',qty:1,price:2400}]},
    ],
    invoices: [
      {id:'in_1',no:'INV-2041',quoteId:'qt_1',companyId:'co_2',contactName:'Marcus Larsson',contactEmail:'marcus@larssonbygg.example',label:'lbl.dep50',amount:7812.50,status:'Paid',issued:days(base,-19),due:days(base,-5)},
      {id:'in_2',no:'INV-2042',quoteId:'qt_1',companyId:'co_2',contactName:'Marcus Larsson',contactEmail:'marcus@larssonbygg.example',label:'lbl.mil25',amount:3906.25,status:'Sent',issued:days(base,-12),due:days(base,-3)},
      {id:'in_3',no:'INV-2043',quoteId:'qt_1',companyId:'co_2',contactName:'Marcus Larsson',contactEmail:'marcus@larssonbygg.example',label:'lbl.fin25',amount:3906.25,status:'Draft',issued:days(base,-12),due:days(base,18)},
    ],
    subs: [
      {id:'sb_1',companyId:'co_3',contactName:'Priya Raman',contactEmail:'priya@helios.example',name:'Monitoring & maintenance',amount:1450,cycle:'Monthly',status:'Active',next:days(base,9),started:days(base,-82)},
    ],
    payments: [
      {id:'pm_1',invoiceId:'in_1',amount:7812.50,method:'Card (demo)',ref:'ch_demo_8f21a',date:days(base,-18)},
    ],
    log: [],
    trash: [],
    tasks: [],
    seq: {q:1044,i:2044}
  };
  d.log = [
    {id:uid('lg'),at:days(base,-20)+' 09:12',kind:'quote',k:'log.seed.qSent',p:['Q-1041','Marcus Larsson']},
    {id:uid('lg'),at:days(base,-19)+' 14:41',kind:'quote',k:'log.seed.qAccepted',p:['Q-1041']},
    {id:uid('lg'),at:days(base,-18)+' 10:03',kind:'pay',k:'log.seed.pay',p:['INV-2041',{v:7812.5}]},
    {id:uid('lg'),at:days(base,-6)+' 16:20',kind:'quote',k:'log.seed.qSentFup',p:['Q-1042','Anna Lind']},
  ].reverse();
  return d;
}
/* =====================================================================
   Persistence — Supabase first, localStorage cache as offline fallback.
   load() pulls every table into memory (db); save() diffs db against the
   last-synced snapshot and upserts/deletes the changed rows. All view
   code mutates db in memory and calls save() — nothing else changes.
   ===================================================================== */
let sb = null;
if(window.SUPABASE_URL && window.SUPABASE_ANON_KEY && window.supabase && typeof window.supabase.createClient === 'function'){
  sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}
const TBL = {
  companies:{db:'companies', map:{}},
  deals:{db:'deals', map:{companyId:'company_id', contactName:'contact_name', contactEmail:'contact_email', lostAt:'lost_at', notes:'notes'}},
  quotes:{db:'quotes', map:{dealId:'deal_id', companyId:'company_id', contactName:'contact_name', contactEmail:'contact_email'}},
  invoices:{db:'invoices', map:{quoteId:'quote_id', companyId:'company_id', contactName:'contact_name', contactEmail:'contact_email'}},
  subs:{db:'subs', map:{companyId:'company_id', contactName:'contact_name', contactEmail:'contact_email'}},
  payments:{db:'payments', map:{invoiceId:'invoice_id', companyId:'company_id'}},
  log:{db:'log', map:{}},
  trash:{db:'trash', map:{companyId:'company_id'}},
  tasks:{db:'tasks', map:{companyId:'company_id', dealId:'deal_id', auto:'auto'}},
};
const REV = Object.fromEntries(Object.entries(TBL).map(([t,v])=>[t, Object.fromEntries(Object.entries(v.map).map(([a,b])=>[b,a]))]));
const flip = (map,o) => { const r={}; for(const [k,v] of Object.entries(o||{})) r[map[k]||k]=v; return r; };
const toRow = (tbl,o) => flip(TBL[tbl].map,o);
const fromRow = tbl => o => flip(REV[tbl],o);
const clone = o => JSON.parse(JSON.stringify(o));

let synced = null;      /* snapshot of db after the last successful sync */
let syncChain = Promise.resolve();
let syncTimer = null;

async function doSync(){
  const base = synced || Object.fromEntries(Object.keys(TBL).map(t=>[t,[]]));
  /* upserts run parent → child, deletes run child → parent, so foreign keys
     are always satisfied (e.g. cascade-deleting a company with deals) */
  const ORDER = ['companies','deals','quotes','invoices','subs','payments','log'];
  for(const t of ORDER){
    const cur = db[t]||[], b = base[t]||[];
    const bIds = new Set(b.map(r=>r.id));
    const ups = cur.filter(r=>!bIds.has(r.id) || JSON.stringify(r)!==JSON.stringify(b.find(x=>x.id===r.id))).map(r=>toRow(t,r));
    if(ups.length) await sb.from(TBL[t].db).upsert(ups);
  }
  for(const t of [...ORDER].reverse()){
    const cur = db[t]||[], b = base[t]||[];
    const cIds = new Set(cur.map(r=>r.id));
    let del = b.filter(r=>!cIds.has(r.id)).map(r=>r.id);
    /* safety net: never wipe an entire table unless a cascade/trash/restore
       just happened (protects against a stale/empty in-memory db wiping real data) */
    if(del.length && del.length === b.length && !cascadeTouched) del = [];
    if(del.length) await sb.from(TBL[t].db).delete().in('id', del);
  }
  cascadeTouched = false;
  await sb.from('meta').upsert([
    {key:'clock', value:{d:db.clock}},
    {key:'seq', value:db.seq},
  ]);
  suppressLoad = false;   /* local state now matches the DB again */
  synced = clone(db);
}
function queueSync(){
  if(!sb) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(()=>{ syncChain = syncChain.then(doSync).catch(()=>{ cacheLocal(); }); }, 350);
}
/* localStorage is unavailable in some sandboxes (data: URLs, private modes).
   It also serves as the offline cache when Supabase is unreachable. */
let storageOK = true;
function cacheLocal(){
  if(storageOK){
    try{ localStorage.setItem(KEY, JSON.stringify(db)); }
    catch(e){ storageOK = false; }
  }
}
async function load(){
  if(sb && !ME) return;
  const fallback = () => {
    try{ const raw = localStorage.getItem(KEY); db = raw ? JSON.parse(raw) : seed(); }
    catch(e){ storageOK = false; db = seed(); }
    if(!db || !db.companies) db = seed();
    synced = null;
  };
  if(!sb){ fallback(); return; }
  try{
    const qs = Object.keys(TBL).map(t=>sb.from(TBL[t].db).select('*'));
    qs.push(sb.from('meta').select('key,value'));
    const rs = await Promise.all(qs);
    const [companies,deals,quotes,invoices,subs,payments,log,trash,tasks,meta] = rs.map(r=>r.data||[]);
    if(companies.length || deals.length || meta.length){
      db = {
        companies: companies.map(fromRow('companies')),
        deals: deals.map(fromRow('deals')),
        quotes: quotes.map(fromRow('quotes')),
        invoices: invoices.map(fromRow('invoices')),
        subs: subs.map(fromRow('subs')),
        payments: payments.map(fromRow('payments')),
        log: log.map(fromRow('log')),
        trash: trash.map(fromRow('trash')),
        tasks: tasks.map(fromRow('tasks')),
        clock: ((meta.find(m=>m.key==='clock')||{}).value||{}).d || '2026-08-19',
        seq: (meta.find(m=>m.key==='seq')||{}).value || {q:1044,i:2044},
      };
      synced = clone(db);
    } else {
      db = seed(); synced = null; /* first run — the next sync pushes the seed */
    }
  }catch(e){ fallback(); }
}
function save(){
  paintCounts();
  if(sb && !ME) return;
  if(sb){ queueSync(); }
  else { cacheLocal(); }
}
function resetDemo(){
  if(!confirm(t('confirm.reset'))) return;
  if(sb && !isAdmin()) return;
  db = seed(); synced = null;
  if(sb){
    syncChain = syncChain.then(() => Promise.all([
      ...Object.keys(TBL).map(t=>sb.from(TBL[t].db).delete().neq('id','__never__')),
      sb.from('meta').delete().neq('key','__never__'),
    ])).catch(()=>{});
    save(); route(); toast(t('toast.reset')); return;
  }
  if(storageOK){ try{ localStorage.removeItem(KEY); }catch(e){} }
  save(); route(); toast(t('toast.reset'));
}

/* =====================================================================
   AUTH — session handling, login screen, and admin/user gating.
   No Supabase configured → offline demo mode, everything editable.
   ===================================================================== */
let ME = null;                       /* current user's profile row */
let usersCache = [];                 /* last fetched profiles (admin view) */
const isAdmin = () => !sb || !!(ME && ME.role === 'admin');
const adminOnly = html => isAdmin() ? html : '';
const pwGen = () => 'Nim' + Math.random().toString(36).slice(2,8) + '!' + Math.floor(Math.random()*999);

async function afterLogin(session){
  try{
    const { data: profs } = await sb.from('profiles').select('*');
    ME = (profs||[]).find(p => p.id === session.user.id) || null;
  }catch(e){ ME = null; }
  if(!ME) ME = { id: session.user.id, email: session.user.email || '', role: 'user', company_ids: [] };
  await load();
  save(); paintLang(); route(); fetchRates();
  showApp();
  buildNav();
  subscribeRealtime();
  initNotifications();
}
/* browser notifications: overdue invoices + deals past their expected close */
let notifReady = false;
function initNotifications(){
  if(!('Notification' in window)) return;
  if(Notification.permission === 'default'){
    Notification.requestPermission().then(p => { try{ localStorage.setItem('nimbus-notif', p); }catch(e){} });
  }
  if(Notification.permission === 'granted'){
    notifReady = true;
    setInterval(maybeNotify, 60000);
    setTimeout(maybeNotify, 4000);
  }
}
function notifItems(){
  const open = [];
  for(const i of db.invoices){
    if(i.status !== 'Paid' && i.status !== 'Void' && i.due && i.due < iso(today()))
      open.push({id:'inv_'+i.id, title:t('notif.invoice', i.no), body:company(i.companyId), href:'#/invoices'});
  }
  for(const d of db.deals){
    if(!['Won','Lost'].includes(d.stage) && d.close && d.close < iso(today()))
      open.push({id:'deal_'+d.id, title:t('notif.deal', d.title), body:company(d.companyId), href:'#/pipeline'});
  }
  for(const x of db.tasks){
    if(!x.done && x.due && x.due < iso(today()))
      open.push({id:'task_'+x.id, title:t('notif.task', x.title), body:taskRef(x), href:'#/tasks'});
  }
  return open;
}
function maybeNotify(){
  if(!notifReady || !sb || !ME || !('Notification' in window) || Notification.permission !== 'granted') return;
  let notified = [];
  try{ notified = JSON.parse(localStorage.getItem('nimbus-notified') || '[]'); }catch(e){}
  const open = notifItems();
  const current = open.map(o=>o.id);
  const fresh = open.filter(o=>!notified.includes(o.id));
  for(const o of fresh){
    try{
      const n = new Notification(o.title, {body:o.body, tag:o.id});
      n.onclick = () => { window.focus(); };
    }catch(e){}
  }
  notified = notified.filter(id=>current.includes(id)).concat(fresh.map(o=>o.id)).slice(-100);
  try{ localStorage.setItem('nimbus-notified', JSON.stringify(notified)); }catch(e){}
}
function showLogin(){
  document.getElementById('login').style.display = 'flex';
  document.getElementById('aside').style.display = 'none';
  document.querySelector('main').style.display = 'none';
  const e = document.getElementById('login-email'), p = document.getElementById('login-pass');
  if(e) e.value = ''; if(p) p.value = '';
  const er = document.getElementById('login-err'); if(er) er.style.display = 'none';
  paintLang();
}
function showApp(){
  document.getElementById('login').style.display = 'none';
  document.getElementById('aside').style.display = '';
  document.querySelector('main').style.display = '';
  const rb = document.getElementById('resetbtn'); if(rb) rb.style.display = isAdmin() ? '' : 'none';
  const nu = document.getElementById('nav-users'); if(nu) nu.style.display = (isAdmin() && sb) ? '' : 'none';
  const lb = document.getElementById('logoutbtn'); if(lb) lb.style.display = '';
}
async function logout(){
  try{ await sb.auth.signOut(); }catch(e){}
  if(rtChannel){ try{ sb.removeChannel(rtChannel); }catch(e){} rtChannel = null; }
  ME = null;
  showLogin();
}
if(sb){
  sb.auth.onAuthStateChange((event) => { if(event === 'SIGNED_OUT'){ ME = null; showLogin(); } });
  const loginForm = document.getElementById('login-form');
  if(loginForm) loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-pass').value;
    const errEl = document.getElementById('login-err');
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if(error || !data.session){
      if(errEl){ errEl.textContent = t('login.err'); errEl.style.display = ''; }
      return;
    }
    await afterLogin(data.session);
  });
}

/* ------------------------- realtime sync -------------------------
   Postgres Changes subscription: every open session applies remote
   INSERT/UPDATE/DELETE to its in-memory db immediately, so changes
   (e.g. an admin deleting a deal) show up in other users' views live.
   RLS filters the events server-side: a regular user only receives
   changes for rows they are allowed to see. On reconnect we reload
   everything to catch events missed while offline. */
let rtChannel = null, rtJoined = false;
let undoMap = {};   /* companyId -> cascade snapshot + countdown (row shows Ångra) */
let undoClock = null;   /* 1s interval driving the countdown and the trash move */
let suppressLoad = false;   /* skip reconnect reloads while a cascade/trash sync is in flight */
let cascadeTouched = false;   /* a cascade→trash/restore just changed data: full-table deletes are legitimate */
let restoredIds = {};   /* tbl -> Set(ids) recently restored (ignore late DELETE echoes of our own cascade) */
function subscribeRealtime(){
  if(!sb || !ME || rtChannel) return;
  rtJoined = false;
  rtChannel = sb.channel('nimbus-sync')
    .on('postgres_changes', { event: '*', schema: 'public' }, onPgChange)
    .subscribe(status => {
      if(status === 'SUBSCRIBED' && rtJoined){
        if(!suppressLoad) load().then(()=>{ paintCounts(); route(); });   /* back online: pull full state (unless we just changed it ourselves) */
      }
      if(status === 'SUBSCRIBED') rtJoined = true;
    });
}
function onPgChange(p){
  if(p.table === 'meta'){
    const v = p.new && p.new.value;
    if(v){ if(p.new.key === 'clock') db.clock = v.d; if(p.new.key === 'seq') db.seq = v; }
    return;
  }
  if(!db[p.table]) return;
  if(p.eventType === 'DELETE'){
    const id = (p.old||{}).id; if(!id) return;
    if(Object.values(undoMap).some(u=>u[p.table] && u[p.table].some(r=>r.id===id))) return;  /* pending undo: don't drop restored rows */
    if(restoredIds[p.table] && restoredIds[p.table].has(id)) return;  /* late echo of our own cascade delete */
    db[p.table] = db[p.table].filter(r => r.id !== id);
  } else if(p.new){
    const row = fromRow(p.table)(p.new);
    const arr = db[p.table];
    const i = arr.findIndex(r => r.id === row.id);
    if(i >= 0) arr[i] = row; else arr.unshift(row);
  }
  route();
}

/* ------------------------------ helpers ------------------------------ */
const byId = (arr,id) => arr.find(x=>x.id===id);
const person = r => (r && (r.contactName||'').trim()) ? r.contactName : '—';
const company = id => (byId(db.companies,id) || {name:'—'}).name;

/* sortable list columns */
let sortState = {};
function sortHead(tbl, key, label, extra=''){
  const st = sortState[tbl];
  const arrow = st && st.key===key ? (st.dir==='asc' ? ' ▲' : ' ▼') : '';
  return `<th class="${extra} sortable" data-tbl="${tbl}" data-key="${key}" onclick="sortList('${tbl}','${key}')">${label}${arrow}</th>`;
}
function sortList(tbl, key){
  const cur = sortState[tbl];
  let dir;
  if(!cur || cur.key !== key) dir = 'asc';               /* new column: start ascending */
  else dir = cur.dir === 'asc' ? 'desc' : 'asc';          /* same column: flip */
  sortState[tbl] = { key, dir };
  if(tbl==='quotes'){ const th=document.getElementById('qth'); if(th) th.innerHTML = quotesThead(); onListInput('qtb'); }
  else if(tbl==='invoices'){ const th=document.getElementById('ith'); if(th) th.innerHTML = invoicesThead(); onListInput('itb'); }
  else if(tbl==='companies'){ const th=document.getElementById('coh'); if(th) th.innerHTML = companiesThead(); renderCompanies(); }
}
function sortVal(tbl, row, key){
  if(tbl==='quotes'){
    if(key==='client') return (person(row)||'').toLowerCase();
    if(key==='total') return quoteTotal(row);
    if(key==='invoices') return invoicesOf(row.id).length;
    return (row[key] ?? '');
  }
  if(tbl==='invoices'){
    if(key==='client') return (person(row)||'').toLowerCase();
    if(key==='status') return invStatus(row);
    if(key==='paid') return paidOf(row);
    return (row[key] ?? '');
  }
  if(tbl==='companies'){
    if(key==='deals') return db.deals.filter(d=>d.companyId===row.id).length;
    if(key==='value') return db.deals.filter(d=>d.companyId===row.id && d.stage!=='Lost').reduce((s,d)=>s+d.value,0);
    if(key==='industry') return (isPersonCust(row) ? (row.email||'') : (row.industry||'')).toLowerCase();
    return (row[key] ?? '');
  }
  return (row[key] ?? '');
}
function sortRows(tbl, list){
  const st = sortState[tbl]; if(!st) return list;
  const dir = st.dir==='asc' ? 1 : -1;
  return [...list].sort((a,b)=>{
    const x = sortVal(tbl,a,st.key), y = sortVal(tbl,b,st.key);
    if(typeof x === 'string') return x.localeCompare(y) * dir;
    return (x>y?1:x<y?-1:0) * dir;
  });
}
const quoteSub = q => q.items.reduce((s,i)=>s + i.qty*i.price, 0);
const quoteTax = q => quoteSub(q) * (q.tax/100);
const quoteTotal = q => quoteSub(q) + quoteTax(q);
const invoicesOf = qid => db.invoices.filter(i=>i.quoteId===qid);
const paidOf = inv => db.payments.filter(p=>p.invoiceId===inv.id).reduce((s,p)=>s+p.amount,0);
const isOverdue = inv => inv.status==='Sent' && inv.due < iso(today());
const invStatus = inv => isOverdue(inv) ? 'Overdue' : inv.status;

function logIt(kind, key, ...params){
  db.log.unshift({id:uid('lg'),at:iso(today())+' '+new Date().toTimeString().slice(0,5),kind,k:key,p:params});
  db.log = db.log.slice(0,120);
}
function toast(msg){
  const t=document.createElement('div'); t.textContent=msg;
  document.getElementById('toast').appendChild(t);
  setTimeout(()=>t.remove(),3200);
}
const tagCls = s => ({
  Draft:'t-grey',New:'t-grey',Contacted:'t-blue',Qualified:'t-purple',Proposal:'t-amber',
  Sent:'t-blue',Opened:'t-blue',Accepted:'t-green',Won:'t-green',Paid:'t-green',Active:'t-green',
  Rejected:'t-red',Lost:'t-red',Overdue:'t-red',Cancelled:'t-red',Void:'t-grey'
}[s] || 't-grey');
const tag = s => `<span class="tag ${tagCls(s)}">${esc(t('st.'+s))}</span>`;

/* ------------------------------ modal ------------------------------ */
let onOk = null;
function modal({title, body, ok=t('btn.save'), wide=false, okClass='primary', onSubmit}){
  closeModal();
  onOk = onSubmit;
  const v=document.createElement('div'); v.className='veil'; v.id='veil';
  v.innerHTML = `<div class="modal ${wide?'wide':''}" role="dialog" aria-modal="true">
    <div class="hd"><h2>${esc(title)}</h2></div>
    <form class="bd" id="mform">${body}</form>
    <div class="ft">
      <button type="button" id="mcan">${t('btn.cancel')}</button>
      ${ok?`<button type="button" class="${okClass}" id="mok">${esc(ok)}</button>`:''}
    </div></div>`;
  v.addEventListener('mousedown', e => { if(e.target===v) closeModal(); });
  document.body.appendChild(v);
  const canb = document.getElementById('mcan');
  if(canb) canb.onclick = closeModal;
  const okb = document.getElementById('mok');
  if(okb) okb.onclick = submit;
  document.getElementById('mform').addEventListener('submit', e=>{e.preventDefault();submit();});
  const first = v.querySelector('input,select,textarea'); if(first) first.focus();
}
async function submit(){
  const f = new FormData(document.getElementById('mform'));
  const data = {}; for(const [k,val] of f.entries()){
    if(k in data){ data[k] = [].concat(data[k], val); } else data[k]=val;
  }
  if(onOk){ const r = await onOk(data); if(r === false) return; }
  closeModal(); save(); route();
}
/* closeModal: NOT named "close" — the native window.close() would shadow it in
   inline handlers and cancel would appear broken. */
function closeModal(){ const v=document.getElementById('veil'); if(v) v.remove(); onOk=null; }
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

/* ====================================================================
   VIEWS
   ==================================================================== */
const view = () => document.getElementById('view');
function head(title, sub, acts=''){
  document.getElementById('ttl').textContent = title;
  document.getElementById('sub').innerHTML = sub||'';
  document.getElementById('acts').innerHTML = acts;
}

/* ---------------- dashboard ---------------- */
function vDashboard(){
  const open = db.deals.filter(d=>!['Won','Lost'].includes(d.stage));
  const pipeline = open.reduce((s,d)=>s+d.value,0);
  const won = db.deals.filter(d=>d.stage==='Won').reduce((s,d)=>s+d.value,0);
  const outstanding = db.invoices.filter(i=>i.status!=='Paid' && i.status!=='Void')
                                 .reduce((s,i)=>s+i.amount-paidOf(i),0);
  const overdue = db.invoices.filter(isOverdue);
  const collected = db.payments.reduce((s,p)=>s+p.amount,0);
  const mrr = db.subs.filter(s=>s.status==='Active')
                     .reduce((s,x)=>s + (x.cycle==='Yearly'? x.amount/12 : x.cycle==='Quarterly'? x.amount/3 : x.amount),0);
  const openTasks = db.tasks.filter(x=>!x.done).sort((a,b)=>a.due.localeCompare(b.due));

  head(t('nav.dashboard'), t('dash.sub', fmtDate(iso(today())), db.companies.length, open.length),
    adminOnly(`<button onclick="runAutomations()">${t('btn.runAuto')}</button>
     <button onclick="advance(7)">${t('btn.advance')}</button>
     <button class="primary" onclick="newDeal()">${t('btn.newDeal')}</button>`));

  const stageRows = STAGES.filter(s=>!['Won','Lost'].includes(s)).map(s=>{
    const ds = db.deals.filter(d=>d.stage===s);
    const val = ds.reduce((a,d)=>a+d.value,0);
    const pct = pipeline ? Math.round(val/pipeline*100) : 0;
    return `<tr><td style="width:120px">${t('st.'+s)}</td>
      <td><div class="bar"><i style="width:${pct}%"></i></div></td>
      <td class="num muted" style="width:70px">${ds.length}</td>
      <td class="num" style="width:110px">${money(val)}</td></tr>`;
  }).join('');

  view().innerHTML = `
  <div class="banner">${t('dash.banner')}</div>

  ${openTasks.length?`<div class="card todo-box" style="margin-bottom:16px">
    <div class="hd"><h2>📋 ${t('task.todo')} (${openTasks.length})</h2><div class="right"><a class="btn sm" href="#/tasks">${t('btn.open')}</a></div></div>
    <table><tbody>${openTasks.map(x=>`<tr>
      <td style="width:36px"><input type="checkbox" onclick="toggleTask('${x.id}')" title="${t('task.done')}"></td>
      <td><b>${x.auto?'🤖 ':''}${esc(x.title)}</b>${taskRef(x)?` <span class="muted" style="font-size:12px">· ${taskRef(x)}</span>`:''}</td>
      <td class="num">${dueBadge(x.due)}</td></tr>`).join('')}</tbody></table>
  </div>`:''}

  <div class="grid kpis" style="margin-bottom:16px">
    ${kpi(t('kpi.open'), money(pipeline), t('kpi.open.d', open.length))}
    ${kpi(t('kpi.won'), money(won), t('kpi.won.d'))}
    ${kpi(t('kpi.out'), money(outstanding), t('kpi.out.d', overdue.length))}
    ${kpi(t('kpi.col'), money(collected), t('kpi.col.d'))}
    ${kpi(t('kpi.mrr'), money(mrr), t('kpi.mrr.d', db.subs.filter(s=>s.status==='Active').length))}
  </div>

  <div class="split">
    <div class="card">
      <div class="hd"><h2>${t('dash.pipe')}</h2><div class="right"><a class="btn sm" href="#/pipeline">${t('btn.openBoard')}</a></div></div>
      <table><tbody>${stageRows}</tbody></table>
    </div>
    <div class="card">
      <div class="hd"><h2>${t('dash.act')}</h2></div>
      <div class="bd"><ul class="tl">${
        db.log.slice(0,7).map(l=>`<li><span class="dot"></span><span>${esc(logText(l))}</span><time>${esc(l.at)}</time></li>`).join('')
        || '<li class="muted">'+t('log.empty')+'</li>'}</ul></div>
    </div>
  </div>

  <div class="card" style="margin-top:16px">
    <div class="hd"><h2>${t('dash.attn')}</h2></div>
    ${attentionTable()}
  </div>`;
}
const kpi = (l,n,d) => `<div class="card kpi"><div class="bd"><div class="l">${l}</div><div class="n">${n}</div><div class="d">${d}</div></div></div>`;

function attentionTable(){
  const rows = [];
  db.invoices.filter(isOverdue).forEach(i=>rows.push(
    [t('attn.overdue'), `${i.no} · ${person(i)}`, money(i.amount-paidOf(i)),
     t('attn.quoteValid', fmtDate(i.due)), adminOnly(`<button class="sm" onclick="payInvoice('${i.id}')">${t('btn.takePay')}</button>`)]));
  db.quotes.filter(q=>q.status==='Sent').forEach(q=>rows.push(
    [t('attn.quoteWait'), `${q.no} · ${person(q)}`, money(quoteTotal(q)),
     t('attn.quoteValid', fmtDate(q.valid)), `<button class="sm" onclick="go('#/quote/${q.id}')">${t('btn.open')}</button>`]));
  db.quotes.filter(q=>q.status==='Draft').forEach(q=>rows.push(
    [t('attn.draft'), `${q.no} · ${person(q)}`, money(quoteTotal(q)),
     t('attn.draftCreated', fmtDate(q.created)), adminOnly(`<button class="sm primary" onclick="sendQuote('${q.id}')">${t('btn.send')}</button>`)]));
  db.deals.filter(d=>!['Won','Lost'].includes(d.stage) && d.close < iso(today())).forEach(d=>rows.push(
    [t('attn.dealLate'), `${d.title} · ${person(d)}`, money(d.value),
     t('attn.expected', fmtDate(d.close)), `<button class="sm" onclick="go('#/pipeline')">${t('btn.board')}</button>`]));
  if(!rows.length) return '<div class="empty">'+t('attn.clear')+'</div>';
  return `<table><thead><tr><th>${t('th.what')}</th><th>${t('th.record')}</th><th class="num">${t('th.amount')}</th><th>${t('th.when')}</th><th></th></tr></thead>
    <tbody>${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td class="num">${r[2]}</td>
      <td class="muted">${r[3]}</td><td style="text-align:right">${r[4]}</td></tr>`).join('')}</tbody></table>`;
}

/* ---------------- pipeline ---------------- */
let compactBoard = false;
try{ compactBoard = localStorage.getItem('nimbus-board') === '1'; }catch(e){}
function toggleBoard(){
  compactBoard = !compactBoard;
  try{ localStorage.setItem('nimbus-board', compactBoard ? '1' : '0'); }catch(e){}
  route();
}
function boardHtml(){
  const q = (document.getElementById('q')?.value||'').toLowerCase();
  const match = d => !q || (d.title+' '+(d.contactName||'')+' '+company(d.companyId)).toLowerCase().includes(q);
  return `<div class="board${compactBoard?' compact':''}">${STAGES.map(s=>{
    const ds = db.deals.filter(d=>d.stage===s && match(d) && !(s==='Lost' && isLostArchived(d)));
    return `<div class="col" data-stage="${s}" ondragover="dragOver(event)" ondragleave="dragLeave(event)" ondrop="drop(event,'${s}')">
      <h3><span>${t('st.'+s)}</span><span>${ds.length} · ${money(ds.reduce((a,d)=>a+d.value,0))}</span></h3>
      ${ds.map(d=>`<div class="deal" draggable="true" ondragstart="dragStart(event,'${d.id}')" onclick="viewDeal('${d.id}')" style="cursor:pointer" title="${t('deal.view')}">
        <div class="t">${esc(d.title)}</div>
        <div class="muted" style="font-size:12px">${esc(person(d))} · ${esc(company(d.companyId))}</div>
        <div class="m"><b>${money(d.value)}</b><span>${fmtDate(d.close)}</span></div>
        ${d.notes?`<div class="muted" style="font-size:12px;margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">📝 ${esc(d.notes.slice(0,60))}</div>`:''}
        ${adminOnly(`<div class="actions" style="margin-top:8px">
          <button class="sm" onclick="event.stopPropagation();newQuote('${d.id}')">${t('btn.quote')}</button>
          <button class="sm" title="${t('btn.edit')}" onclick="event.stopPropagation();editDeal('${d.id}')">✏️</button>
          <button class="sm ghost danger" onclick="event.stopPropagation();delDeal('${d.id}')">${t('btn.delete')}</button>
        </div>`)}</div>`).join('')}
    </div>`;
  }).join('')}</div>`;
}
function onDealSearch(){ const w = document.getElementById('boardwrap'); if(w) w.innerHTML = boardHtml(); }
function vPipeline(){
  const total = db.deals.filter(d=>!['Won','Lost'].includes(d.stage)).reduce((s,d)=>s+d.value,0);
  head(t('nav.pipeline'), t('pipeline.sub', money(total)),
    `<button class="sm" id="notifbtn" title="${t('notif.title')}" onclick="toggleNotifPanel()">🔔 <span class="notif-badge" id="notif-badge"></span></button>` +
    `<button class="sm" id="boardbtn" onclick="toggleBoard()">${t(compactBoard?'board.roomy':'board.compact')}</button>` +
    adminOnly(`<button class="primary" onclick="newDeal()">${t('btn.newDeal')}</button>`));
  view().innerHTML = `<div class="listbar"><input id="q" placeholder="${t('list.search')}" oninput="onDealSearch()"></div>
    <div id="boardwrap">${boardHtml()}</div>`;
}
let dragging=null;
function dragStart(e,id){ dragging=id; e.dataTransfer.effectAllowed='move'; }
function dragOver(e){ e.preventDefault(); e.currentTarget.classList.add('over'); }
function dragLeave(e){ e.currentTarget.classList.remove('over'); }
function drop(e,stage){
  e.preventDefault(); e.currentTarget.classList.remove('over');
  const d = byId(db.deals,dragging); if(!d) return;
  if(d.stage!==stage){ setDealStage(d, stage); logIt('deal','log.dealMoved', d.title, ['st.'+stage]); save(); route(); }
}
/* moves a deal to a stage, tracking lostAt so Lost deals leave the pipeline after 24h */
function setDealStage(d, stage){
  if(stage==='Lost' && d.stage!=='Lost' && !d.lostAt) d.lostAt = new Date().toISOString();
  if(stage!=='Lost') d.lostAt = null;
  d.stage = stage;
}
/* a Lost deal is archived (hidden from the pipeline board) 24h after it was lost */
function isLostArchived(d){
  if(d.stage!=='Lost' || !d.lostAt) return false;
  return Date.now() - new Date(d.lostAt).getTime() >= 86400000;
}
function delDeal(id){
  const d=byId(db.deals,id); if(!d||!confirm(t('confirm.delDeal', d.title))) return;
  db.deals = db.deals.filter(x=>x.id!==id); logIt('deal','log.dealDeleted', d.title); save(); route();
}
/* deal detail modal: click anywhere on a pipeline card → read-only info + notes */
function viewDeal(id){
  const d = byId(db.deals,id); if(!d) return;
  const c = byId(db.companies,d.companyId);
  const qs = db.quotes.filter(q=>q.dealId===id);
  modal({title:esc(d.title), wide:true, ok:'', body:`
    <div class="row" style="align-items:start;gap:18px">
      <div style="flex:1;min-width:0">
        <table class="kv"><tbody>
          <tr><td>${t('field.company')}</td><td>${c?`<span class="link" onclick="go('#/customer/${c.id}')">${esc(c.name)}</span>`:'—'}</td></tr>
          <tr><td>${t('field.contactPerson')}</td><td>${esc(d.contactName||'—')}</td></tr>
          <tr><td>${t('field.contactEmail')}</td><td>${esc(d.contactEmail||'—')}</td></tr>
          <tr><td>${t('field.value')}</td><td>${money(d.value)}</td></tr>
          <tr><td>${t('field.stage')}</td><td>${tag(d.stage)}</td></tr>
          <tr><td>${t('field.close')}</td><td>${fmtDate(d.close)}</td></tr>
          <tr><td>${t('deal.created')}</td><td>${fmtDate(d.created)}</td></tr>
        </tbody></table>
        ${qs.length?`<h3 style="margin:16px 0 6px">${t('nav.quotes')}</h3><table><tbody>${qs.map(q=>`<tr>
          <td class="mono link" onclick="go('#/quote/${q.id}')">${q.no}</td><td>${tag(q.status)}</td>
          <td class="num">${money(quoteTotal(q))}</td></tr>`).join('')}</tbody></table>`:''}
        <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
          ${d.contactEmail?`<a class="btn sm" href="mailto:${esc(d.contactEmail)}?subject=${esc(encodeURIComponent('Re: '+d.title))}">📧 ${t('deal.mail')}</a>`:''}
          <button class="sm" onclick="callDealContact('${d.id}')">📞 ${t('deal.call')}</button>
        </div>
      </div>
      <div style="flex:1;min-width:0">
        <h3 style="margin:0 0 6px">${t('deal.notes')}</h3>
        <textarea id="deal-notes" rows="12" style="width:100%" readonly>${esc(d.notes||'')}</textarea>
      </div>
    </div>`});
}
function callDealContact(id){
  const d = byId(db.deals,id); if(!d) return;
  const c = byId(db.companies,d.companyId);
  const ph = (c && c.phone) || '';
  if(!ph){ toast(t('deal.noPhone')); return; }
  location.href = 'tel:' + ph;
}
/* edit a deal: opened from the ✏️ button on the pipeline card */
function editDeal(id){
  const d = byId(db.deals,id); if(!d) return;
  modal({title:t('btn.edit'), wide:true, body:`
    <div class="row">
      <div class="field"><label>${t('field.dealName')}</label><input name="title" value="${esc(d.title)}" required></div>
      <div class="field"><label>${t('field.value')}</label><input name="value" type="number" min="0" step="100" value="${d.value}" required></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.company')}</label><select name="companyId">${customerOptions(d.companyId)}</select></div>
      <div class="field"><label>${t('field.stage')}</label><select name="stage">${STAGES.map(s=>`<option value="${s}" ${s===d.stage?'selected':''}>${t('st.'+s)}</option>`).join('')}</select></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.contactPerson')}</label><input name="contactName" value="${esc(d.contactName||'')}" required></div>
      <div class="field"><label>${t('field.contactEmail')}</label><input name="contactEmail" type="email" value="${esc(d.contactEmail||'')}"></div>
      <div class="field"><label>${t('field.close')}</label><input name="close" type="date" value="${d.close}" required></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('deal.notes')}</label><textarea name="notes" rows="5" style="width:100%">${esc(d.notes||'')}</textarea></div>
    </div>`,
    ok:t('btn.save'),
    onSubmit(x){
      if(!x.title || !x.contactName) return false;
      const oldStage = d.stage;
      d.title = x.title; d.value = +x.value||0; d.companyId = x.companyId; d.contactName = x.contactName;
      d.contactEmail = x.contactEmail||''; d.close = x.close||addMonth(today()); d.notes = (x.notes||'').trim();
      if(x.stage !== oldStage) setDealStage(d, x.stage);
      toast(t('toast.dealUpdated')); save(); route();
    }});
}
function newDeal(companyId){
  modal({title:t('btn.newDeal'), body:`
    <div class="row">
      <div class="field"><label>${t('field.dealName')}</label><input name="title" required placeholder="e.g. Line-2 retrofit"></div>
      <div class="field"><label>${t('field.value')}</label><input name="value" type="number" min="0" step="100" value="10000" required></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.company')}</label><select name="companyId">${customerOptions(companyId)}</select>
        <button type="button" class="sm" style="margin-top:6px" onclick="dealNewCustomer()">＋ ${t('deal.newCustomer')}</button></div>
      <div class="field"><label>${t('field.stage')}</label><select name="stage">${STAGES.map(s=>`<option value="${s}">${t('st.'+s)}</option>`).join('')}</select></div>
    </div>
    <div id="dealnewcust" style="display:none;border:1px dashed var(--line,#999);border-radius:8px;padding:10px 12px;margin-bottom:12px"></div>
    <div class="row">
      <div class="field"><label>${t('field.contactPerson')} *</label><input name="contactName" required placeholder="Jane Doe"></div>
      <div class="field"><label>${t('field.contactEmail')}</label><input name="contactEmail" type="email" placeholder="jane@example.com"></div>
      <div class="field"><label>${t('field.close')}</label><input name="close" type="date" value="${addMonth(today())}"></div>
    </div>`,
    ok:t('btn.createDeal'),
    onSubmit(d){
      if(!d.title || !d.contactName) return false;
      db.deals.unshift({id:uid('dl'),title:d.title,companyId:d.companyId,contactName:d.contactName,
        contactEmail:d.contactEmail||'',value:+d.value||0,stage:d.stage,close:d.close||addMonth(today()),created:iso(today())});
      logIt('deal','log.dealCreated', d.title, d.contactName);
      toast(t('toast.dealCreated'));
    }});
}
/* inline "new customer" inside the new-deal modal: creates the customer,
   selects it in the picker and closes the inline form — no navigation needed */
function dealNewCustomer(){
  const box = document.getElementById('dealnewcust'); if(!box) return;
  if(box.innerHTML){ box.innerHTML = ''; box.style.display = 'none'; return; }   /* toggle off */
  box.style.display = '';
  box.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
      <b style="font-size:13px">${t('deal.newCustomer')}</b>
      <select id="dnc-type" style="width:auto" onchange="dealNewCustomerType()">
        <option value="company">${t('customers.company')}</option>
        <option value="person">${t('customers.private')}</option>
      </select>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.name')}</label><input id="dnc-name" placeholder="ACME AB / Anna Andersson"></div>
      <div class="field dnc-co"><label>${t('field.industry')}</label><input id="dnc-industry" placeholder="Manufacturing"></div>
      <div class="field dnc-pers" style="display:none"><label>${t('field.email')}</label><input id="dnc-email" type="email" placeholder="anna@example.com"></div>
      <div class="field dnc-pers" style="display:none"><label>${t('field.phone')}</label><input id="dnc-phone" placeholder="070-123 45 67"></div>
    </div>
    <button type="button" class="sm primary" onclick="dealAddCustomer()">${t('btn.create')}</button>`;
}
function dealNewCustomerType(){
  const pers = document.getElementById('dnc-type').value === 'person';
  document.querySelectorAll('.dnc-co').forEach(e=>e.style.display = pers ? 'none' : '');
  document.querySelectorAll('.dnc-pers').forEach(e=>e.style.display = pers ? '' : 'none');
}
function dealAddCustomer(){
  const name = (document.getElementById('dnc-name').value || '').trim();
  if(!name){ toast(t('deal.nameRequired')); return; }
  const isPerson = document.getElementById('dnc-type').value === 'person';
  const c = {id:uid('co'), name,
    industry: isPerson ? null : (document.getElementById('dnc-industry').value || null),
    email: isPerson ? (document.getElementById('dnc-email').value || '') : null,
    phone: isPerson ? (document.getElementById('dnc-phone').value || '') : null,
    type: isPerson ? 'person' : 'company'};
  db.companies.unshift(c);
  const sel = document.getElementById('mform').querySelector('select[name="companyId"]');
  if(sel){
    const opt = document.createElement('option');
    opt.value = c.id; opt.textContent = c.name; opt.selected = true;
    const grp = [...sel.querySelectorAll('optgroup')].find(g=>g.label === t(isPerson?'customers.private':'customers.company'));
    (grp || sel).appendChild(opt);
    sel.value = c.id;
  }
  const box = document.getElementById('dealnewcust');
  if(box){ box.innerHTML = ''; box.style.display = 'none'; }
  toast(t('toast.companyCreated'));
  save();
}

/* ---------------- companies / customer list ---------------- */
const isPersonCust = c => c.type === 'person';
const isCustMode = c => custMode === 'person' ? isPersonCust(c) : !isPersonCust(c);
function customerOptions(sel){
  const opts = (list,label) => list.length ? `<optgroup label="${label}">${list.map(c=>
    `<option value="${c.id}" ${c.id===sel?'selected':''}>${esc(c.name)}</option>`).join('')}</optgroup>` : '';
  return opts(db.companies.filter(c=>!isPersonCust(c)), t('customers.company'))
       + opts(db.companies.filter(isPersonCust), t('customers.private'));
}
function vCompanies(){
  head(t('nav.companies'), t('companies.sub'),
    adminOnly(`<button class="primary" onclick="newCustomer()">${t(custMode==='person'?'btn.newPerson':'btn.newCompany')}</button>`));
  const rows = customerRows();
  view().innerHTML = `
    <div class="listbar">
      <button class="sm ${custMode==='company'?'primary':''}" onclick="setCustMode('company')">${t('customers.company')}</button>
      <button class="sm ${custMode==='person'?'primary':''}" onclick="setCustMode('person')">${t('customers.private')}</button>
    </div>
    <div class="card"><table>
      <thead id="coh">${customerThead()}</thead>
      <tbody id="cob">${rows}</tbody></table>${db.companies.filter(isCustMode).length?'':'<div class="empty">'+t('companies.empty')+'</div>'}</div>`;
}
function setCustMode(m){
  if(custMode === m) return;
  custMode = m;
  try{ localStorage.setItem('nimbus-cust', custMode); }catch(e){}
  route();
}
function customerThead(){
  return `<tr>
    ${sortHead('companies','name',t('th.name'))}
    ${sortHead('companies','industry', custMode==='person' ? t('field.email') : t('th.industry'))}
    ${sortHead('companies','deals',t('th.deals'),'num')}
    ${sortHead('companies','value',t('th.value'),'num')}
    <th></th>
  </tr>`;
}
function customerRows(){
  return sortRows('companies', db.companies.filter(isCustMode)).map(c=>{
    const ds = db.deals.filter(d=>d.companyId===c.id);
    const val = ds.filter(d=>!['Lost'].includes(d.stage)).reduce((s,d)=>s+d.value,0);
    const u = undoMap[c.id];
    const meta = isPersonCust(c) ? esc(c.email||'—') : esc(c.industry||'—');
    return `<tr class="${u?'undoing':''}">
      <td><b class="link" onclick="go('#/customer/${c.id}')">${esc(c.name)}</b></td>
      <td>${meta}</td>
      <td class="num">${ds.length}</td>
      <td class="num">${money(val)}</td>
      <td style="text-align:right">${u
        ? `<span class="undocount">${u.left}</span><button class="sm primary" onclick="undoDeleteCompany('${c.id}')">${t('companies.undo')}</button>`
        : adminOnly(`<button class="sm" onclick="editCompany('${c.id}')">${t('btn.edit')}</button>
          <button class="sm ghost danger" onclick="delCompany('${c.id}')">${t('btn.delete')}</button>`)}</td>
    </tr>`;
  }).join('');
}
function renderCompanies(){ const t=document.getElementById('cob'); if(t) t.innerHTML = customerRows(); }
function newCustomer(){
  const isPerson = custMode === 'person';
  modal({title:t(isPerson?'btn.newPerson':'btn.newCompany'), body: isPerson ? `
    <div class="row">
      <div class="field"><label>${t('field.name')}</label><input name="name" required placeholder="Anna Andersson"></div>
      <div class="field"><label>${t('field.email')}</label><input name="email" type="email" placeholder="anna@example.com"></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.phone')}</label><input name="phone" placeholder="070-123 45 67"></div>
    </div>` : `
    <div class="row">
      <div class="field"><label>${t('field.name')}</label><input name="name" required placeholder="ACME AB"></div>
      <div class="field"><label>${t('field.industry')}</label><input name="industry" placeholder="Manufacturing"></div>
    </div>`,
    ok:t('btn.create'),
    onSubmit(d){
      if(!d.name) return false;
      db.companies.unshift({id:uid('co'), name:d.name, industry:isPerson?null:(d.industry||null),
        email:isPerson?(d.email||''):null, phone:isPerson?(d.phone||''):null, type:isPerson?'person':'company'});
      toast(t('toast.companyCreated'));
    }});
}
function editCompany(id){
  const c = byId(db.companies,id); if(!c) return;
  const isPerson = isPersonCust(c);
  modal({title:t('btn.edit'), body: isPerson ? `
    <div class="row">
      <div class="field"><label>${t('field.name')}</label><input name="name" value="${esc(c.name)}" required></div>
      <div class="field"><label>${t('field.email')}</label><input name="email" type="email" value="${esc(c.email||'')}"></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.phone')}</label><input name="phone" value="${esc(c.phone||'')}"></div>
    </div>` : `
    <div class="row">
      <div class="field"><label>${t('field.name')}</label><input name="name" value="${esc(c.name)}" required></div>
      <div class="field"><label>${t('field.industry')}</label><input name="industry" value="${esc(c.industry||'')}"></div>
    </div>`,
    ok:t('btn.save'),
    onSubmit(d){
      if(!d.name) return false;
      c.name = d.name;
      if(isPerson){ c.email = d.email||''; c.phone = d.phone||''; }
      else c.industry = d.industry||null;
      toast(t('toast.companyUpdated'));
    }});
}
/* customer detail: everything about one customer on a single page */
function vCustomer(id){
  const c = byId(db.companies,id); if(!c) return notFound();
  const ds  = db.deals.filter(d=>d.companyId===id);
  const qs  = db.quotes.filter(q=>q.companyId===id);
  const ivs = db.invoices.filter(i=>i.companyId===id);
  const pms = db.payments.filter(p=>p.companyId===id);
  const subs= db.subs.filter(s=>s.companyId===id);
  const val = ds.filter(d=>!['Won','Lost'].includes(d.stage)).reduce((s,d)=>s+d.value,0);
  head(c.name,
    `${isPersonCust(c)?t('customers.private'):t('customers.company')} · ${esc(isPersonCust(c)?(c.email||'—'):(c.industry||'—'))}`,
    `<a class="btn" href="#/portal/${c.id}">${t('btn.clientView')}</a> ` +
    adminOnly(`<button class="primary" onclick="newDeal('${c.id}')">${t('btn.newDeal')}</button>`));
  view().innerHTML = `
  <a class="btn sm ghost" href="#/companies">${t('customer.back')}</a>
  <div class="grid kpis" style="margin:14px 0">
    ${kpi(t('th.deals'), ds.length, t('customer.openVal', money(val)))}
    ${kpi(t('nav.quotes'), qs.length, t('quote.invFrom'))}
    ${kpi(t('nav.invoices'), ivs.length, t('nav.payments'))}
    ${kpi(t('nav.payments'), money(pms.reduce((s,p)=>s+p.amount,0)), t('customer.subs'))}
  </div>
  <div class="split" style="align-items:start">
    <div class="card"><div class="hd"><h2>${t('th.deals')}</h2><div class="right"><a class="btn sm" href="#/pipeline">${t('btn.openBoard')}</a></div></div>
      ${ds.length?`<table><tbody>${ds.map(d=>`<tr style="cursor:pointer" onclick="go('#/pipeline')">
        <td><b>${esc(d.title)}</b></td><td>${tag(d.stage)}</td><td class="num">${money(d.value)}</td>
        <td class="muted">${t('attn.expected', fmtDate(d.close))}</td></tr>`).join('')}</tbody></table>`
      :`<div class="empty">${t('customer.noDeals')}</div>`}
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card"><div class="hd"><h2>${t('nav.quotes')}</h2></div>
        ${qs.length?`<table><tbody>${qs.map(q=>`<tr>
          <td class="mono link" onclick="go('#/quote/${q.id}')">${q.no}</td><td>${tag(q.status)}</td>
          <td class="num">${money(quoteTotal(q))}</td></tr>`).join('')}</tbody></table>`
        :`<div class="empty">${t('customer.noQuotes')}</div>`}
      </div>
      <div class="card"><div class="hd"><h2>${t('nav.invoices')}</h2></div>
        ${ivs.length?`<table><tbody>${ivs.map(i=>`<tr>
          <td class="mono">${i.no}</td><td>${tag(invStatus(i))}</td>
          <td class="num">${money(i.amount)}</td>
          <td style="text-align:right"><button class="sm" onclick="viewInvoice('${i.id}')">${t('btn.preview')}</button></td></tr>`).join('')}</tbody></table>`
        :`<div class="empty">${t('customer.noInvoices')}</div>`}
      </div>
      <div class="card"><div class="hd"><h2>${t('nav.payments')}</h2></div>
        ${pms.length?`<table><tbody>${pms.map(p=>`<tr>
          <td class="muted">${fmtDate(p.date)}</td><td>${esc(p.method||'—')}</td>
          <td class="num">${money(p.amount)}</td></tr>`).join('')}</tbody></table>`
        :`<div class="empty">${t('customer.noPayments')}</div>`}
      </div>
      <div class="card"><div class="hd"><h2>${t('customer.subs')}</h2></div>
        ${subs.length?`<table><tbody>${subs.map(s=>`<tr>
          <td><b>${esc(s.name)}</b></td><td class="num">${money(s.amount)}</td>
          <td>${tag(s.status)}</td></tr>`).join('')}</tbody></table>`
        :`<div class="empty">${t('customer.noSubs')}</div>`}
      </div>
    </div>
  </div>`;
}
function delCompany(id){
  const c = byId(db.companies,id); if(!c || undoMap[id]) return;
  /* collect the full cascade: company → deals → quotes → invoices → subs/payments */
  const deals   = db.deals.filter(d=>d.companyId===id);
  const dealIds = new Set(deals.map(d=>d.id));
  const quotes  = db.quotes.filter(q=>q.companyId===id || dealIds.has(q.dealId));
  const qIds    = new Set(quotes.map(q=>q.id));
  const invoices= db.invoices.filter(i=>i.companyId===id || qIds.has(i.quoteId));
  const iIds    = new Set(invoices.map(i=>i.id));
  const subs    = db.subs.filter(s=>s.companyId===id);
  const payments= db.payments.filter(p=>p.companyId===id || iIds.has(p.invoiceId));
  /* nothing is removed yet — the row's Ta bort button turns into Ångra with a
     countdown for 5 s; at zero the cascade happens and the company moves to the trash */
  undoMap[id] = { company:c, deals, quotes, invoices, subs, payments, left:5 };
  if(!undoClock) undoClock = setInterval(tickUndo, 1000);
  route();
}
function tickUndo(){
  for(const id of Object.keys(undoMap)){
    const u = undoMap[id];
    u.left--;
    if(u.left <= 0) trashCompany(id);   /* deletes undoMap[id] */
  }
  if(Object.keys(undoMap).length) renderCompanies();
  else { clearInterval(undoClock); undoClock = null; }
}
function undoDeleteCompany(id){
  const u = undoMap[id]; if(!u) return;
  delete undoMap[id];
  if(!Object.keys(undoMap).length && undoClock){ clearInterval(undoClock); undoClock = null; }
  toast(t('toast.undo')); route();
}
function trashCompany(id){
  const u = undoMap[id]; if(!u) return;
  delete undoMap[id];
  /* now actually cascade: remove child → parent so in-memory references never dangle */
  const dealIds = new Set(u.deals.map(d=>d.id));
  const qIds    = new Set(u.quotes.map(q=>q.id));
  const iIds    = new Set(u.invoices.map(i=>i.id));
  db.payments  = db.payments.filter(p=>p.companyId!==id && !iIds.has(p.invoiceId));
  db.invoices  = db.invoices.filter(i=>!iIds.has(i.id));
  db.quotes    = db.quotes.filter(q=>!qIds.has(q.id));
  db.subs      = db.subs.filter(s=>s.companyId!==id);
  db.deals     = db.deals.filter(d=>!dealIds.has(d.id));
  db.companies = db.companies.filter(x=>x.id!==id);
  db.trash.unshift({id:uid('tr'), companyId:id,
    at: iso(today()) + ' ' + new Date().toTimeString().slice(0,5),
    name:u.company.name, deals:u.deals.length,
    snapshot:{company:u.company, deals:u.deals, quotes:u.quotes, invoices:u.invoices, subs:u.subs, payments:u.payments}});
  cascadeTouched = true;   /* the upcoming sync legitimately deletes those rows */
  suppressLoad = true;   /* local state is ahead of the DB until the sync lands */
  save(); route();
}
function markRestored(tbl, rows){
  if(!rows || !rows.length) return;
  const s = restoredIds[tbl] = restoredIds[tbl] || new Set();
  for(const r of rows) s.add(r.id);
  setTimeout(()=>{ for(const r of rows) s.delete(r.id); }, 5000);
}
function vTrash(){
  head(t('nav.trash'), t('trash.sub'));
  view().innerHTML = `<div class="card"><table>
    <thead><tr><th>${t('th.name')}</th><th>${t('th.deals')}</th><th>${t('trash.at')}</th><th></th></tr></thead>
    <tbody>${trashRows()}</tbody></table>${db.trash.length?'':'<div class="empty">'+t('trash.empty')+'</div>'}</div>`;
}
function trashRows(){
  return db.trash.map(x=>`<tr>
    <td><b>${esc(x.name)}</b></td>
    <td class="num">${x.deals}</td>
    <td class="muted">${esc(x.at)}</td>
    <td style="text-align:right">
      <button class="sm primary" onclick="restoreTrash('${x.id}')">${t('trash.restore')}</button>
      <button class="sm ghost danger" onclick="purgeTrash('${x.id}')">${t('trash.purge')}</button>
    </td></tr>`).join('');
}
function restoreTrash(id){
  const x = byId(db.trash,id); if(!x) return;
  db.companies.unshift(x.snapshot.company);
  for(const r of x.snapshot.deals)    db.deals.unshift(r);
  for(const r of x.snapshot.quotes)   db.quotes.unshift(r);
  for(const r of x.snapshot.invoices) db.invoices.unshift(r);
  for(const r of x.snapshot.subs)     db.subs.unshift(r);
  for(const r of x.snapshot.payments) db.payments.unshift(r);
  markRestored('companies',[x.snapshot.company]);
  markRestored('deals',x.snapshot.deals);
  markRestored('quotes',x.snapshot.quotes);
  markRestored('invoices',x.snapshot.invoices);
  markRestored('subs',x.snapshot.subs);
  markRestored('payments',x.snapshot.payments);
  db.trash = db.trash.filter(y=>y.id!==id);
  cascadeTouched = true;   /* the upcoming sync legitimately re-inserts those rows */
  suppressLoad = true;   /* local state is ahead of the DB until the sync lands */
  toast(t('trash.restored')); save(); route();
}
/* ---------------- lost deals ---------------- */
let lostTicker = null;
function lostLeft(d){
  if(!d.lostAt) return null;
  const ms = 86400000 - (Date.now() - new Date(d.lostAt).getTime());
  if(ms <= 0) return null;
  return t('lost.left', Math.floor(ms/3600000), Math.floor((ms%3600000)/60000));
}
function lostTickerRun(){
  clearTimeout(lostTicker);
  lostTicker = setTimeout(() => {
    if(location.hash === '#/lost'){
      document.querySelectorAll('.lost-t').forEach(el => {
        const d = byId(db.deals, el.dataset.id);
        if(d && d.stage==='Lost'){
          const left = lostLeft(d);
          el.textContent = left || t('lost.archived');
          if(el.parentElement) el.parentElement.className = 'tag ' + (left ? 't-amber' : 't-red');
        }
      });
      lostTickerRun();
    }
  }, 30000);
}
function vLost(){
  const lost = db.deals.filter(d=>d.stage==='Lost').sort((a,b)=>(b.lostAt||'').localeCompare(a.lostAt||''));
  const total = lost.reduce((s,d)=>s+d.value,0);
  head(t('nav.lost'), t('lost.total', money(total)));
  view().innerHTML = `<div class="card">${lost.length?`<table><tbody>${lost.map(d=>{
    const arch = isLostArchived(d);
    return `<tr>
      <td><b>${esc(d.title)}</b><div class="muted" style="font-size:12px">${esc(person(d))} · ${esc(company(d.companyId))}</div></td>
      <td class="num">${money(d.value)}</td>
      <td class="muted">${d.lostAt?fmtDate(d.lostAt.slice(0,10)):'—'}</td>
      <td><span class="tag ${arch?'t-red':'t-amber'}">${arch?t('lost.archived'):`<span class="lost-t" data-id="${d.id}">${lostLeft(d)||t('lost.archived')}</span>`}</span></td>
      <td style="text-align:right">${adminOnly(`<button class="sm" onclick="restoreLost('${d.id}')">${t('trash.restore')}</button>
        <button class="sm ghost danger" onclick="delDeal('${d.id}')">${t('btn.delete')}</button>`)}</td>
    </tr>`;}).join('')}</tbody></table>`:`<div class="empty">${t('lost.empty')}</div>`}</div>`;
  lostTickerRun();
}
function restoreLost(id){
  const d = byId(db.deals,id); if(!d) return;
  d.stage = 'New'; d.lostAt = null;
  toast(t('lost.restored')); save(); route();
}
/* ---------------- tasks / to-dos ---------------- */
function vTasks(){
  head(t('nav.tasks'), t('task.sub'), adminOnly(`<button class="primary" onclick="newTask()">${t('task.new')}</button>`));
  const open = db.tasks.filter(x=>!x.done).sort((a,b)=>a.due.localeCompare(b.due));
  const done = db.tasks.filter(x=>x.done);
  view().innerHTML = `<div class="card">${open.length
    ? `<div class="hd"><h2>${t('task.open')}</h2></div>${taskList(open)}`
    : `<div class="empty">${t('task.empty')}</div>`}
    ${done.length?`<div class="hd" style="margin-top:18px"><h2>${t('task.done')}</h2></div>${taskList(done)}`:''}
  </div>`;
}
function taskList(list){
  return `<table><tbody>${list.map(x=>`<tr class="${x.done?'muted':''}">
    <td style="width:36px"><input type="checkbox" ${x.done?'checked':''} onclick="toggleTask('${x.id}')" title="${t('task.done')}"></td>
    <td><b>${x.auto?'🤖 ':''}${esc(x.title)}</b><div class="muted" style="font-size:12px">${taskRef(x)}</div></td>
    <td class="num">${dueBadge(x.due)}</td>
    <td style="text-align:right">${adminOnly(`<button class="sm" onclick="editTask('${x.id}')">${t('btn.edit')}</button>
      <button class="sm ghost danger" onclick="delTask('${x.id}')">${t('btn.delete')}</button>`)}</td>
  </tr>`).join('')}</tbody></table>`;
}
function taskRef(x){
  const parts = [];
  if(x.dealId){ const d = byId(db.deals,x.dealId); if(d) parts.push(`<span class="link" onclick="go('#/pipeline')">${esc(d.title)}</span>`); }
  if(x.companyId){ const c = byId(db.companies,x.companyId); if(c) parts.push(`<span class="link" onclick="go('#/customer/${c.id}')">${esc(c.name)}</span>`); }
  return parts.join(' · ');
}
function dueBadge(due){
  const cls = due < today() ? 't-red' : due === today() ? 't-amber' : 't-grey';
  const label = due < today() ? t('task.overdue') : due === today() ? t('task.today') : fmtDate(due);
  return `<span class="tag ${cls}">${label}</span>`;
}
function taskCustomerOptions(sel){ return `<option value="">${t('opt.none')}</option>` + customerOptions(sel); }
function taskDealOptions(sel){ return `<option value="">${t('opt.none')}</option>` + db.deals.map(d=>`<option value="${d.id}" ${d.id===sel?'selected':''}>${esc(d.title)}</option>`).join(''); }
function newTask(companyId){
  modal({title:t('task.new'), body:`
    <div class="row">
      <div class="field"><label>${t('task.title')}</label><input name="title" required placeholder="Ring kunden på fredag"></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.company')}</label><select name="companyId">${taskCustomerOptions(companyId)}</select></div>
      <div class="field"><label>${t('th.deals')}</label><select name="dealId">${taskDealOptions()}</select></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('task.due')}</label><input name="due" type="date" value="${days(today(),1)}" required></div>
    </div>`,
    ok:t('btn.create'),
    onSubmit(d){
      if(!d.title) return false;
      db.tasks.unshift({id:uid('ts'), title:d.title, companyId:d.companyId||null, dealId:d.dealId||null,
        due:d.due||days(today(),1), done:false, created:iso(today())});
      toast(t('task.created'));
    }});
}
function editTask(id){
  const x = byId(db.tasks,id); if(!x) return;
  modal({title:t('btn.edit'), body:`
    <div class="row">
      <div class="field"><label>${t('task.title')}</label><input name="title" value="${esc(x.title)}" required></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.company')}</label><select name="companyId">${taskCustomerOptions(x.companyId)}</select></div>
      <div class="field"><label>${t('th.deals')}</label><select name="dealId">${taskDealOptions(x.dealId)}</select></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('task.due')}</label><input name="due" type="date" value="${esc(x.due)}" required></div>
      <div class="field"><label>${t('task.done')}</label><select name="done"><option value="0">${t('task.open')}</option><option value="1" ${x.done?'selected':''}>${t('task.done')}</option></select></div>
    </div>`,
    ok:t('btn.save'),
    onSubmit(d){
      if(!d.title) return false;
      x.title = d.title; x.companyId = d.companyId||null; x.dealId = d.dealId||null;
      x.due = d.due; x.done = d.done==='1';
      toast(t('task.updated'));
    }});
}
function toggleTask(id){
  const x = byId(db.tasks,id); if(!x) return;
  x.done = !x.done;
  toast(x.done ? t('task.done') : t('task.updated'));
  save(); route();
}
function delTask(id){
  const x = byId(db.tasks,id); if(!x) return;
  if(!confirm(t('confirm.delTask', x.title))) return;
  db.tasks = db.tasks.filter(y=>y.id!==id);
  toast(t('task.deleted')); save(); route();
}
function purgeTrash(id){
  const x = byId(db.trash,id); if(!x) return;
  if(!confirm(t('confirm.purgeTrash', x.name))) return;
  db.trash = db.trash.filter(y=>y.id!==id);
  toast(t('trash.purged')); save(); route();
}

/* ---------------- email (local IMAP/SMTP bridge) ---------------- */
let emailUrl = 'http://127.0.0.1:8787';
try{ emailUrl = localStorage.getItem('nimbus-email-url') || emailUrl; }catch(e){}

function vEmail(){
  head(t('nav.email'), t('email.sub'));
  view().innerHTML = `<div class="card" id="emailbox"></div>`;
  emailLoad();
}
async function emailLoad(){
  const box = document.getElementById('emailbox'); if(!box) return;
  const inp = document.getElementById('email-server-url');
  if(inp){ emailUrl = inp.value.trim() || emailUrl; try{ localStorage.setItem('nimbus-email-url', emailUrl); }catch(e){} }
  box.innerHTML = `<div class="listbar">
    <input id="email-server-url" value="${esc(emailUrl)}" placeholder="${t('email.serverUrl')}" style="max-width:280px">
    <button class="sm primary" onclick="emailLoad()">${t('email.refresh')}</button>
    <button class="sm" onclick="emailSendModal()">${t('email.send')}</button></div>`;
  let h = null;
  try{ h = await (await fetch(emailUrl + '/api/health')).json(); }catch(e){}
  if(!h || !h.ok){
    box.insertAdjacentHTML('beforeend', `<div class="empty">${t('email.notConnected')}</div>`);
    return;
  }
  if(!h.configured){
    box.insertAdjacentHTML('beforeend', `<div class="empty">${t('email.notConfigured')}</div>`);
    return;
  }
  let list = null;
  try{
    const r = await (await fetch(emailUrl + '/api/emails?limit=20')).json();
    if(!r.ok) throw new Error(r.error || 'load failed');
    list = r.emails || [];
  }
  catch(e){ box.insertAdjacentHTML('beforeend', `<div class="empty">${t('email.loadFailed', e.message)}</div>`); return; }
  box.insertAdjacentHTML('beforeend', `<h3 style="margin:14px 0 8px">${t('email.inbox')}</h3>` +
    (list.length ? `<table><tbody>${list.map(m=>`<tr class="${m.seen?'':'unseen'}" style="cursor:pointer" onclick="emailOpen(${m.uid})">
      <td><b>${esc(m.from)}</b></td><td>${esc(m.subject)}</td><td class="muted">${esc((m.date||'').slice(0,10))}</td></tr>`).join('')}</tbody></table>`
    : `<div class="empty">${t('email.empty')}</div>`));
}
async function emailOpen(uid){
  let r = null;
  try{ r = await (await fetch(emailUrl + '/api/emails/' + uid)).json(); }catch(e){ toast(t('email.loadFailed', e.message)); return; }
  if(!r.ok){ toast(t('email.loadFailed', r.error || '')); return; }
  const m = r.message;
  modal({title: m.subject || '(no subject)', wide:true, body:`
    <div class="muted" style="margin-bottom:10px">${esc(m.from)} · ${esc((m.date||'').slice(0,10))}</div>
    ${m.text ? `<pre style="white-space:pre-wrap;font:inherit;margin:0">${esc(m.text)}</pre>` : `<div>${m.html||''}</div>`}`});
}
function emailSendModal(to, subject, html, onSent, pdfData){
  modal({title:t('email.send'), wide:true, body:`
    <div class="row">
      <div class="field"><label>${t('email.to')}</label><input name="to" type="email" value="${esc(to||'')}" required></div>
      <div class="field"><label>${t('email.subject')}</label><input name="subject" value="${esc(subject||'')}" required></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('email.body')}</label><textarea name="body" rows="12" style="width:100%">${esc(html||'')}</textarea>
        <div id="emailsig" class="muted" style="font-size:12.5px;margin-top:8px"></div></div>
    </div>
    ${pdfData ? `<div class="muted" style="font-size:12.5px">📎 ${esc(t(pdfData.type==='invoice'?'doc.invoice':'doc.offer', pdfData.no))}.pdf</div>` : ''}`,
    ok:t('email.send'),
    onSubmit: async (d) => {
      if(!d.to || !d.subject) return false;
      const btn = document.getElementById('mok');
      if(btn){ btn.disabled = true; btn.textContent = t('email.sending'); }
      try{
        const r = await (await fetch(emailUrl + '/api/send', {method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({to:d.to, subject:d.subject, html:d.body, pdf: pdfData || undefined})})).json();
        if(!r.ok) throw new Error(r.error || 'send failed');
        toast(t('email.sent'));
        if(onSent) onSent();
        return true;
      }catch(e){
        toast(t('email.sendFailed', e.message));
        if(btn){ btn.disabled = false; btn.textContent = t('email.send'); }
        return false;
      }
    }});
  /* show the auto-signature as a preview under the message body */
  (async () => {
    try{
      const r = await (await fetch(emailUrl + '/api/config')).json();
      const el = document.getElementById('emailsig');
      if(el && r && r.signature) el.innerHTML = `<span style="opacity:.55">—</span> ${r.signature}`;
    }catch(e){}
  })();
}
function emailQuote(id){
  const q = byId(db.quotes,id); if(!q) return;
  const rows = q.items.map(i=>`<tr><td>${esc(i.desc)}</td><td style="text-align:right">${i.qty} × ${money(i.price)}</td>
    <td style="text-align:right">${money(i.qty*i.price)}</td></tr>`).join('');
  const html = `<div style="font-family:system-ui,sans-serif;max-width:600px">
    <h2>${esc(t('doc.offer', q.no))}</h2>
    <p>Hej ${esc(person(q))},</p>
    <p>Här är offert <b>${esc(q.no)}</b> från ${esc(company(q.companyId))}.</p>
    <table style="width:100%;border-collapse:collapse">${rows}</table>
    <p><b>Totalt: ${money(quoteTotal(q))}</b> (moms ${q.tax}%)</p>
    <p>Giltig till ${fmtDate(q.valid)}.</p>
  </div>`;
  const pdf = {
    type:'quote', no:q.no, company:company(q.companyId), contactName:person(q),
    lang, currency:curr, rate:rateOf(curr), tax:q.tax,
    created:fmtDate(q.created), valid:fmtDate(q.valid),
    items:q.items.map(i=>({desc:i.desc, qty:i.qty, price:i.price})),
  };
  emailSendModal(q.contactEmail || '', t('email.quoteSubject', q.no), html, () => {
    q.status = 'Sent';
    logIt('quote','log.quoteSent', q.no, person(q));
    logIt('auto','log.followup', q.no, fmtDate(days(today(),3)));
    save(); route();
  }, pdf);
}
function emailInvoice(id){
  const i = byId(db.invoices,id); if(!i) return;
  const html = `<div style="font-family:system-ui,sans-serif;max-width:600px">
    <h2>${esc(t('doc.invoice', i.no))}</h2>
    <p>Hej ${esc(person(i))},</p>
    <p>Här är fakturan <b>${esc(i.no)}</b> från ${esc(company(i.companyId))}.</p>
    <p><b>Belopp: ${money(i.amount)}</b> — förfaller ${fmtDate(i.due)}.</p>
    <p>Fakturan bifogas som PDF.</p>
  </div>`;
  const pdf = {
    type:'invoice', no:i.no, company:company(i.companyId), contactName:person(i),
    lang, currency:curr, rate:rateOf(curr),
    amount:i.amount, paid:paidOf(i), issued:fmtDate(i.issued), due:fmtDate(i.due),
    status:invStatus(i) === 'Overdue' ? t('st.Overdue') : t('st.'+invStatus(i)),
  };
  emailSendModal(i.contactEmail || '', t('email.invoiceSubject', i.no), html, null, pdf);
}

/* ---------------- quotes ---------------- */
function vQuotes(){
  head(t('nav.quotes'), t('quotes.sub'),
    adminOnly(`<button class="primary" onclick="newQuote()">${t('btn.newQuote')}</button>`));
  view().innerHTML = `
    <div class="listbar"><input id="q" placeholder="${t('list.search')}" oninput="onListInput('qtb')">
      <select id="f" onchange="onListInput('qtb')">
        <option value="">${t('list.all')}</option>
        ${['Draft','Sent','Accepted','Rejected'].map(s=>`<option value="${s}">${t('st.'+s)}</option>`).join('')}
      </select></div>
    <div class="card"><table>
      <thead id="qth">${quotesThead()}</thead>
      <tbody id="qtb">${quoteRows()}</tbody></table></div>`;
}
function quotesThead(){
  return `<tr>
    ${sortHead('quotes','no',t('th.number'))}
    ${sortHead('quotes','client',t('th.client'))}
    ${sortHead('quotes','status',t('th.status'))}
    ${sortHead('quotes','created',t('th.created'))}
    ${sortHead('quotes','valid',t('th.valid'))}
    ${sortHead('quotes','total',t('th.total'),'num')}
    ${sortHead('quotes','invoices',t('th.invoices'),'num')}
    <th></th>
  </tr>`;
}
function quoteRows(){
  const s=(document.getElementById('q')?.value||'').toLowerCase();
  const f=document.getElementById('f')?.value||'';
  const list = sortRows('quotes', db.quotes
    .filter(x=>!f || x.status===f)
    .filter(x=>!s || (x.no+' '+person(x)+' '+company(x.companyId)).toLowerCase().includes(s)));
  if(!list.length) return `<tr><td colspan="8"><div class="nomatches">${t('list.none')}</div></td></tr>`;
  return list.map(q=>`<tr>
    <td class="mono link" onclick="go('#/quote/${q.id}')">${q.no}</td>
    <td>${esc(person(q))}<div class="muted" style="font-size:12px">${esc(company(q.companyId))}</div></td>
    <td>${tag(q.status)}</td>
    <td class="muted">${fmtDate(q.created)}</td>
    <td class="muted">${fmtDate(q.valid)}</td>
    <td class="num">${money(quoteTotal(q))}</td>
    <td class="num muted">${invoicesOf(q.id).length||'—'}</td>
    <td style="text-align:right">
      ${adminOnly((q.status==='Draft'?`<button class="sm primary" onclick="sendQuote('${q.id}')">${t('btn.send')}</button>`:'') + (q.status==='Sent'?`<button class="sm" onclick="acceptQuote('${q.id}')">${t('btn.markAccept')}</button>`:''))}
      <button class="sm" onclick="go('#/quote/${q.id}')">${t('btn.viewQuote')}</button>
    </td></tr>`).join('');
}
function onListInput(tid){
  const t = document.getElementById(tid); if(!t) return;
  t.innerHTML = tid==='qtb' ? quoteRows() : invoiceRows();
}

function newQuote(dealId){
  const dl = dealId && byId(db.deals,dealId);
  modal({title:t('newQuote.title'), wide:true, body:`
    <div class="row">
      <div class="field"><label>${t('field.company')}</label><select name="companyId">${customerOptions(dl?dl.companyId:undefined)}</select></div>
      <div class="field"><label>${t('field.contactPerson')} *</label><input name="contactName" value="${esc(dl?dl.contactName:'')}" required placeholder="Jane Doe"></div>
      <div class="field"><label>${t('field.contactEmail')}</label><input name="contactEmail" type="email" value="${esc(dl?dl.contactEmail:'')}" placeholder="jane@example.com"></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('field.linkedDeal')}</label><select name="dealId"><option value="">${t('opt.none')}</option>${db.deals.map(d=>
        `<option value="${d.id}" ${d.id===dealId?'selected':''}>${esc(d.title)}</option>`).join('')}</select></div>
      <div class="field"><label>${t('field.valid')}</label><input name="valid" type="date" value="${days(today(),21)}"></div>
      <div class="field"><label>${t('field.tax')}</label><input name="tax" type="number" value="25" min="0" max="100"></div>
    </div>
    <label>${t('field.lines')}</label>
    <table class="items" id="lines"><thead><tr><th>${t('th.description')}</th><th style="width:80px">${t('th.qty')}</th>
      <th style="width:120px">${t('th.unit')}</th><th style="width:40px"></th></tr></thead><tbody>
      ${[0,1].map(()=>lineRow()).join('')}
    </tbody></table>
    <button type="button" class="sm" style="margin-top:8px" onclick="addLine()">${t('btn.addLine')}</button>`,
    ok:t('btn.createQuote'),
    onSubmit(d){
      const desc=[].concat(d.desc||[]), qty=[].concat(d.qty||[]), price=[].concat(d.price||[]);
      const items = desc.map((t,i)=>({desc:t,qty:+qty[i]||0,price:+price[i]||0})).filter(i=>i.desc && i.qty>0);
      if(!items.length){ alert(t('alert.lines')); return false; }
      if(!d.contactName){ alert(t('alert.client')); return false; }
      const no = 'Q-' + (db.seq.q++);
      db.quotes.unshift({id:uid('qt'),no,dealId:d.dealId||null,companyId:d.companyId,
        contactName:d.contactName,contactEmail:d.contactEmail||'',status:'Draft',
        created:iso(today()),valid:d.valid,tax:+d.tax||0,items});
      logIt('quote','log.quoteDrafted', no, d.contactName, money(items.reduce((s,i)=>s+i.qty*i.price,0)*(1+(+d.tax||0)/100)));
      toast(t('toast.quoteDrafted', no));
    }});
}
const lineRow = () => `<tr><td><input name="desc" placeholder="${t('th.description')}"></td>
  <td><input name="qty" type="number" value="1" min="0" step="1"></td>
  <td><input name="price" type="number" value="0" min="0" step="50"></td>
  <td><button type="button" class="sm ghost danger" onclick="this.closest('tr').remove()">✕</button></td></tr>`;
function addLine(){ document.querySelector('#lines tbody').insertAdjacentHTML('beforeend', lineRow()); }

function vQuote(id){
  const q = byId(db.quotes,id); if(!q) return notFound();
  head(t('quote.head', q.no), `${esc(person(q))} · ${esc(company(q.companyId))} · ${tag(q.status)}`,
    adminOnly(
      (q.status==='Draft'?`<button class="primary" onclick="sendQuote('${q.id}')">${t('btn.sendToClient')}</button>`:'') +
      `<button class="sm" onclick="emailQuote('${q.id}')">📧 ${t('email.send')}</button>` +
      (q.status==='Sent'?`<button class="primary" onclick="acceptQuote('${q.id}')">${t('btn.markAccept')}</button>
        <button onclick="rejectQuote('${q.id}')">${t('btn.markReject')}</button>`:'') +
      (q.status==='Accepted'?`<button class="primary" onclick="makeInvoices('${q.id}')">${t('btn.genInv')}</button>`:'')
    ) +
    `<button class="sm" onclick="window.print()">${t('btn.print')}</button>
    <a class="btn" href="#/portal/${q.companyId}">${t('btn.clientView')}</a>`);
  const invs = invoicesOf(q.id);
  view().innerHTML = `
  <a class="btn sm ghost" href="#/quotes">${t('btn.back')}</a>
  <div class="split" style="margin-top:12px">
    <div class="card print-area"><div class="bd">${quoteDoc(q)}</div></div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card"><div class="hd"><h2>${t('quote.status')}</h2></div><div class="bd">
        <div class="field"><label>${t('field.current')}</label>${tag(q.status)}</div>
        <div class="field"><label>${t('field.created')}</label>${fmtDate(q.created)}</div>
        <div class="field"><label>${t('field.valid')}</label>${fmtDate(q.valid)}</div>
        <div class="field"><label>${t('field.total')}</label><b style="font-size:18px">${money(quoteTotal(q))}</b></div>
      </div></div>
      <div class="card"><div class="hd"><h2>${t('quote.invFrom')}</h2></div>
        ${invs.length?`<table><tbody>${invs.map(i=>`<tr>
          <td class="mono link" onclick="go('#/invoices')">${i.no}</td><td>${esc(t(i.label))}</td>
          <td>${tag(invStatus(i))}</td><td class="num">${money(i.amount)}</td>
          <td style="text-align:right"><button class="sm" onclick="viewInvoice('${i.id}')">${t('btn.preview')}</button></td></tr>`).join('')}</tbody></table>`
          :`<div class="empty">${t('quote.noneYet')}${q.status==='Accepted'?adminOnly('<br><button class="sm primary" style="margin-top:10px" data-id="'+q.id+'" onclick="makeInvoices(this.dataset.id)">'+t('btn.genInv')+'</button>'):''}</div>`}
      </div>
    </div>
  </div>`;
}
function quoteDoc(q){
  return `<div class="doc">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px">
      <div><h3>${t('doc.offer', q.no)}</h3><div class="muted">${t('doc.issued', fmtDate(q.created), fmtDate(q.valid))}</div></div>
      <div style="text-align:right"><b>Nimbus AB</b><div class="muted" style="font-size:12px">
        Demo Street 1, Stockholm<br>billing@nimbus.example</div></div>
    </div>
    <div style="margin-bottom:16px"><label>${t('doc.prepared')}</label>
      <b>${esc(person(q))}</b><div class="muted">${esc(company(q.companyId))} · ${esc(q.contactEmail||'')}</div></div>
    <table class="items"><thead><tr><th>${t('th.description')}</th><th class="num">${t('th.qty')}</th>
      <th class="num">${t('th.unit')}</th><th class="num">${t('th.amount')}</th></tr></thead><tbody>
      ${q.items.map(i=>`<tr><td>${esc(i.desc)}</td><td class="num">${i.qty}</td>
        <td class="num">${money(i.price)}</td><td class="num">${money(i.qty*i.price)}</td></tr>`).join('')}
    </tbody></table>
    <table style="margin-top:14px;margin-left:auto;width:280px">
      <tbody>
        <tr><td class="muted">${t('doc.subtotal')}</td><td class="num">${money(quoteSub(q))}</td></tr>
        <tr><td class="muted">${t('doc.vat', q.tax)}</td><td class="num">${money(quoteTax(q))}</td></tr>
        <tr><td><b>${t('doc.total')}</b></td><td class="num"><b>${money(quoteTotal(q))}</b></td></tr>
      </tbody></table>
    <p class="muted" style="font-size:12px;margin-top:18px">${t('doc.terms')}</p>
  </div>`;
}
function sendQuote(id){
  const q=byId(db.quotes,id); if(!q) return;
  q.status='Sent';
  logIt('quote','log.quoteSent', q.no, person(q));
  logIt('auto','log.followup', q.no, fmtDate(days(today(),3)));
  save(); route(); toast(t('toast.quoteSent', q.no));
}
function rejectQuote(id){
  const q=byId(db.quotes,id); if(!q) return;
  q.status='Rejected';
  const d = q.dealId && byId(db.deals,q.dealId); if(d){ setDealStage(d,'Lost'); logIt('deal','log.dealLost', d.title, q.no); }
  logIt('quote','log.quoteRejected', q.no); save(); route();
}
function acceptQuote(id){
  const q=byId(db.quotes,id); if(!q) return;
  q.status='Accepted';
  const d = q.dealId && byId(db.deals,q.dealId); if(d){ setDealStage(d,'Won'); logIt('deal','log.dealWon', d.title, q.no); }
  logIt('quote','log.quoteAccepted', q.no, person(q));
  save(); route();
  makeInvoices(id, true);
}
/* invoice generation — one-time, milestones, or a subscription */
function makeInvoices(id, autoPrompt){
  const q=byId(db.quotes,id); if(!q) return;
  const total = quoteTotal(q);
  modal({title:t('bill.title', q.no, money(total)), body:`
    ${autoPrompt?`<div class="banner">${t('bill.banner')}</div>`:''}
    <div class="field"><label>${t('bill.plan')}</label>
      <select name="plan" onchange="document.getElementById('subwrap').style.display=this.value==='sub'?'block':'none'">
        <option value="one">${t('bill.one')}</option>
        <option value="milestone" selected>${t('bill.milestone')}</option>
        <option value="third">${t('bill.third')}</option>
        <option value="sub">${t('bill.sub')}</option>
      </select></div>
    <div class="row"><div class="field"><label>${t('bill.due')}</label>
      <input name="due" type="date" value="${days(today(),14)}"></div>
      <div class="field"><label>${t('bill.send')}</label>
        <select name="send"><option value="yes">${t('bill.sendYes')}</option><option value="no">${t('bill.sendNo')}</option></select></div>
    </div>
    <div id="subwrap" style="display:none">
      <div class="row">
        <div class="field"><label>${t('bill.amount')}</label><input name="amount" type="number" value="${Math.round(total/12)}"></div>
        <div class="field"><label>${t('bill.cycle')}</label><select name="cycle"><option>Monthly</option><option>Quarterly</option><option>Yearly</option></select></div>
      </div>
      <p class="muted" style="font-size:12px">${t('bill.subNote')}</p>
    </div>`,
    ok:t('btn.create'),
    onSubmit(d){
      if(d.plan==='sub'){
        const s={id:uid('sb'),companyId:q.companyId,contactName:q.contactName,contactEmail:q.contactEmail,
          name:`${q.no} ${t('sub.retainerName')}`,amount:+d.amount||0,
          cycle:d.cycle,status:'Active',next:d.due,started:iso(today())};
        db.subs.unshift(s);
        logIt('sub','log.subCreated', s.name, money(s.amount), t('cycle.'+s.cycle.toLowerCase()), fmtDate(s.next));
        toast(t('toast.subCreated')); return;
      }
      const parts = d.plan==='one' ? [['lbl.full',1]]
        : d.plan==='third' ? [['lbl.inv1of3',1/3],['lbl.inv2of3',1/3],['lbl.inv3of3',1/3]]
        : [['lbl.dep50',.5],['lbl.mil25',.25],['lbl.fin25',.25]];
      parts.forEach(([lbl,frac],ix)=>{
        const no='INV-'+(db.seq.i++);
        db.invoices.unshift({id:uid('in'),no,quoteId:q.id,companyId:q.companyId,contactName:q.contactName,
          contactEmail:q.contactEmail,label:lbl,
          amount:Math.round(total*frac*100)/100, status: d.send==='yes' && ix===0 ? 'Sent':'Draft',
          issued:iso(today()), due: days(d.due, ix*30)});
      });
      logIt('invoice','log.invGen', parts.length, q.no, t('bill.'+d.plan));
      toast(t('toast.invCreated', parts.length));
    }});
}

/* ---------------- invoices & payments ---------------- */
function vInvoices(){
  const out = db.invoices.filter(i=>i.status!=='Paid').reduce((s,i)=>s+i.amount-paidOf(i),0);
  head(t('nav.invoices'), t('invoices.sub', money(out)),
    adminOnly(`<button onclick="runAutomations()">${t('btn.sendRemind')}</button>`));
  view().innerHTML = `
    <div class="listbar"><input id="q" placeholder="${t('list.search')}" oninput="onListInput('itb')">
      <select id="f" onchange="onListInput('itb')">
        <option value="">${t('list.all')}</option>
        ${['Draft','Sent','Overdue','Paid','Void'].map(s=>`<option value="${s}">${t('st.'+s)}</option>`).join('')}
      </select></div>
    <div class="card"><table>
      <thead id="ith">${invoicesThead()}</thead>
      <tbody id="itb">${invoiceRows()}</tbody></table></div>`;
}
function invoicesThead(){
  return `<tr>
    ${sortHead('invoices','no',t('th.number'))}
    ${sortHead('invoices','client',t('th.client'))}
    <th>${t('th.fromQuote')}</th>
    ${sortHead('invoices','status',t('th.status'))}
    ${sortHead('invoices','issued',t('th.issued'))}
    ${sortHead('invoices','due',t('th.due'))}
    ${sortHead('invoices','amount',t('th.amount'),'num')}
    ${sortHead('invoices','paid',t('th.paid'),'num')}
    <th></th>
  </tr>`;
}
function invoiceRows(){
  const s=(document.getElementById('q')?.value||'').toLowerCase();
  const f=document.getElementById('f')?.value||'';
  const list = sortRows('invoices', db.invoices
    .filter(i=>!f || (f==='Overdue' ? invStatus(i)==='Overdue' : i.status===f))
    .filter(i=>!s || (i.no+' '+person(i)+' '+company(i.companyId)).toLowerCase().includes(s)));
  if(!list.length) return `<tr><td colspan="9"><div class="nomatches">${t('list.none')}</div></td></tr>`;
  return list.map(i=>{
    const st=invStatus(i), q = byId(db.quotes,i.quoteId);
    return `<tr>
      <td class="mono">${i.no}</td>
      <td>${esc(person(i))}<div class="muted" style="font-size:12px">${esc(t(i.label))}</div></td>
      <td>${q?`<span class="link" onclick="go('#/quote/${q.id}')">${q.no}</span>`:'<span class="muted">—</span>'}</td>
      <td>${tag(st)}</td>
      <td class="muted">${fmtDate(i.issued)}</td>
      <td class="muted">${fmtDate(i.due)}</td>
      <td class="num">${money(i.amount)}</td>
      <td class="num">${paidOf(i)?money(paidOf(i)):'<span class="muted">—</span>'}</td>
      <td style="text-align:right">
        <button class="sm" onclick="previewQuoteOf('${i.id}')">${t('btn.viewQuote')}</button>
        <button class="sm" onclick="emailInvoice('${i.id}')">📧 ${t('email.send')}</button>
        <button class="sm" onclick="viewInvoice('${i.id}')">${t('btn.print')}</button>
        ${adminOnly((i.status==='Draft'?`<button class="sm" onclick="sendInvoice('${i.id}')">${t('btn.send')}</button>`:'') + (i.status!=='Paid'?`<button class="sm primary" onclick="payInvoice('${i.id}')">${t('btn.takePay')}</button>`:''))}
      </td></tr>`;
  }).join('');
}
function invoiceDoc(i){
  return `<div class="doc">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px">
      <div><h3>${t('doc.invoice', i.no)}</h3><div class="muted">${t('doc.due', fmtDate(i.due))}</div></div>
      <div style="text-align:right"><b>Nimbus AB</b><div class="muted" style="font-size:12px">
        Demo Street 1, Stockholm<br>billing@nimbus.example</div></div>
    </div>
    <div style="margin-bottom:16px"><label>${t('doc.prepared')}</label>
      <b>${esc(person(i))}</b><div class="muted">${esc(company(i.companyId))} · ${esc(i.contactEmail||'')}</div></div>
    <table class="items">
      <tbody><tr><td>${esc(t(i.label))}</td><td class="num">${money(i.amount)}</td></tr></tbody>
    </table>
    <table style="margin-top:14px;margin-left:auto;width:280px">
      <tbody>
        <tr><td class="muted">${t('th.status')}</td><td class="num">${tag(invStatus(i))}</td></tr>
        ${paidOf(i) ? `<tr><td class="muted">${t('th.paid')}</td><td class="num">${money(paidOf(i))}</td></tr>` : ''}
        <tr><td><b>${t('doc.total')}</b></td><td class="num"><b>${money(i.amount)}</b></td></tr>
      </tbody>
    </table>
    <p class="muted" style="font-size:12px;margin-top:18px">${t('doc.terms')}</p>
  </div>`;
}
function viewInvoice(id){
  const i=byId(db.invoices,id); if(!i) return;
  const q = i.quoteId && byId(db.quotes,i.quoteId);
  modal({title:t('doc.invoice', i.no), wide:true, ok:'',
    body:`<div class="print-area">${invoiceDoc(i)}</div>
      <div style="margin-top:12px;text-align:right">${q?`<button type="button" class="sm" onclick="previewQuoteOf('${i.id}')">${t('btn.viewQuote')}</button> `:''}<button type="button" class="primary" onclick="window.print()">${t('btn.print')}</button></div>`});
}
function previewQuoteOf(id){
  const i=byId(db.invoices,id); if(!i) return;
  const q = i.quoteId && byId(db.quotes,i.quoteId);
  if(!q){ toast(t('quote.noneYet')); return; }
  modal({title:t('doc.offer', q.no), wide:true, ok:'',
    body:`<div class="print-area">${quoteDoc(q)}</div>
      <div style="margin-top:12px;text-align:right"><button type="button" class="primary" onclick="window.print()">${t('btn.print')}</button></div>`});
}
function sendInvoice(id){
  const i=byId(db.invoices,id); if(!i) return;
  i.status='Sent'; logIt('invoice','log.invSent', i.no, person(i));
  save(); route(); toast(t('toast.invSent', i.no));
}
function payInvoice(id){
  const inv=byId(db.invoices,id); if(!inv) return;
  const due = Math.round((inv.amount - paidOf(inv))*100)/100;
  modal({title:t('pay.title', inv.no), body:`
    <div class="banner">${t('pay.banner')}</div>
    <div class="row">
      <div class="field"><label>${t('field.amount')}</label><input name="amount" type="number" step="0.01" value="${due}"></div>
      <div class="field"><label>${t('field.method')}</label><select name="method">
        <option>Card (demo)</option><option>Bank transfer (demo)</option><option>Invoice/Net 30 (demo)</option></select></div>
      <div class="field"><label>${t('field.date')}</label><input name="date" type="date" value="${iso(today())}"></div>
    </div>
    <p class="muted" style="font-size:12px">${t('th.client')}: ${esc(person(inv))} · ${esc(inv.contactEmail||'')}</p>`,
    ok:t('btn.recordPay'),
    onSubmit(d){
      const amt = Math.round((+d.amount||0)*100)/100;
      if(amt<=0){ alert(t('alert.amount')); return false; }
      db.payments.unshift({id:uid('pm'),invoiceId:inv.id,amount:amt,method:d.method,
        ref:'ch_demo_'+Math.random().toString(36).slice(2,7),date:d.date});
      if(paidOf(inv) + 0.001 >= inv.amount){ inv.status='Paid'; logIt('pay','log.invPaid', inv.no); }
      else logIt('pay','log.partial', inv.no, money(amt));
      logIt('pay','log.payment', inv.no, money(amt), d.method);
      toast(t('toast.payment', money(amt)));
    }});
}
function vPayments(){
  const tot = db.payments.reduce((s,p)=>s+p.amount,0);
  head(t('nav.payments'), t('payments.sub', db.payments.length, money(tot)));
  view().innerHTML = `<div class="card"><table>
    <thead><tr><th>${t('th.date')}</th><th>${t('th.invoice')}</th><th>${t('th.client')}</th><th>${t('th.method')}</th><th>${t('th.ref')}</th><th class="num">${t('th.amount')}</th></tr></thead>
    <tbody>${db.payments.map(p=>{
      const i=byId(db.invoices,p.invoiceId)||{no:'—',contactName:null};
      return `<tr><td class="muted">${fmtDate(p.date)}</td><td class="mono">${i.no}</td>
        <td>${esc(person(i))}</td><td>${esc(methodTxt(p.method))}</td>
        <td class="mono muted">${esc(p.ref)}</td><td class="num">${money(p.amount)}</td></tr>`;
    }).join('')}</tbody></table>${db.payments.length?'':'<div class="empty">'+t('payments.empty')+'</div>'}</div>`;
}
/* ---------------- automation ---------------- */
function vAutomation(){
  head(t('nav.automation'), t('auto.sub'),
    adminOnly(`<button onclick="runAutomations()">${t('btn.runNow')}</button><button onclick="advance(7)">${t('btn.advance')}</button>`));
  view().innerHTML = `
  <div class="split">
    <div class="card"><div class="hd"><h2>${t('auto.activity')}</h2></div><div class="bd">
      <ul class="tl">${db.log.map(l=>`<li><span class="dot"></span><span>${esc(logText(l))}</span>
        <time>${esc(l.at)}</time></li>`).join('') || '<li class="muted">'+t('log.empty')+'</li>'}</ul></div></div>
    <div class="card"><div class="hd"><h2>${t('auto.rules')}</h2></div><div class="bd">
      <ol style="margin:0;padding-left:18px;line-height:1.9">
        <li>${t('auto.r1')}</li>
        <li>${t('auto.r2')}</li>
        <li>${t('auto.r3')}</li>
        <li>${t('auto.r4')}</li>
        <li>${t('auto.r5')}</li>
      </ol>
      <p class="muted" style="font-size:12px;margin-top:14px">${t('auto.note')}</p>
    </div></div>
  </div>`;
}
function runAutomations(){
  let n=0;
  db.invoices.filter(isOverdue).forEach(i=>{
    logIt('auto','log.reminder', i.no, money(i.amount-paidOf(i)), person(i)); n++;
    /* in-app reminder: create a to-do task (no email) unless one is already open */
    const title = t('auto.overdueTask', i.no, money(i.amount-paidOf(i)));
    const dupe = db.tasks.some(x=>x.title===title && !x.done);
    if(!dupe) db.tasks.unshift({id:uid('ts'), title, companyId:i.companyId, dealId:null,
      due:iso(today()), done:false, created:iso(today()), auto:true});
  });
  db.quotes.filter(q=>q.status==='Sent' && q.valid < iso(today())).forEach(q=>{
    q.status='Rejected'; logIt('auto','log.expired', q.no); n++;
  });
  db.subs.filter(s=>s.status==='Active' && s.next <= iso(today())).forEach(s=>{
    const no='INV-'+(db.seq.i++);
    db.invoices.unshift({id:uid('in'),no,quoteId:null,companyId:s.companyId,contactName:s.contactName,
      contactEmail:s.contactEmail,label:s.name+' — '+t('cycle.'+s.cycle.toLowerCase()),
      amount:s.amount,status:'Sent',issued:iso(today()),
      due:days(today(),14)});
    s.next = days(s.next, s.cycle==='Yearly'?365:s.cycle==='Quarterly'?90:30);
    logIt('auto','log.invRaised', no, s.name, fmtDate(s.next)); n++;
  });
  if(!n) logIt('auto','log.nothing');
  save(); route(); toast(n?t('toast.autoFired', n):t('toast.autoDone'));
}
function advance(n){
  db.clock = days(db.clock, n);
  logIt('auto','log.clock', n, fmtDate(db.clock));
  save(); runAutomations();
}

/* ---------------- client portal ---------------- */
function vPortal(id){
  const c = id ? byId(db.companies,id) : db.companies[0];
  if(!c) return notFound();
  head(t('nav.portal'), t('portal.sub', esc(c.name)),
    `<select onchange="go('#/portal/'+this.value)" style="width:auto">${customerOptions(c.id)}</select>`);
  const qs = db.quotes.filter(q=>q.companyId===c.id && q.status!=='Draft');
  const is = db.invoices.filter(i=>i.companyId===c.id && i.status!=='Draft');
  view().innerHTML = `
  <div class="banner">${t('portal.banner')}</div>
  <div class="card" style="margin-bottom:16px"><div class="bd" style="display:flex;align-items:center;gap:14px">
    <span class="avatar" style="width:44px;height:44px;flex:0 0 44px;font-size:15px">${init(c.name)}</span>
    <div><b style="font-size:16px">${esc(c.name)}</b><div class="muted">${esc(isPersonCust(c) ? (c.email||'') : (c.industry||''))}</div></div>
  </div></div>
  <div class="card" style="margin-bottom:16px"><div class="hd"><h2>${t('portal.offers')}</h2></div>
    ${qs.length?`<table><thead><tr><th>${t('th.offer')}</th><th>${t('th.status')}</th><th>${t('th.valid')}</th><th class="num">${t('th.total')}</th><th></th></tr></thead>
      <tbody>${qs.map(q=>`<tr><td class="mono">${q.no}</td><td>${tag(q.status)}</td>
        <td class="muted">${fmtDate(q.valid)}</td><td class="num">${money(quoteTotal(q))}</td>
        <td style="text-align:right">
          <button class="sm" onclick="viewDoc('${q.id}')">${t('btn.view')}</button>
          ${q.status==='Sent'?adminOnly(`<button class="sm primary" onclick="acceptQuote('${q.id}')">${t('btn.accept')}</button>
            <button class="sm" onclick="rejectQuote('${q.id}')">${t('btn.decline')}</button>`):''}
        </td></tr>`).join('')}</tbody></table>`:'<div class="empty">'+t('portal.noOffers')+'</div>'}
  </div>
  <div class="card"><div class="hd"><h2>${t('portal.invoices')}</h2></div>
    ${is.length?`<table><thead><tr><th>${t('th.invoice')}</th><th>${t('th.for')}</th><th>${t('th.status')}</th><th>${t('th.due')}</th><th class="num">${t('th.amount')}</th><th></th></tr></thead>
      <tbody>${is.map(i=>`<tr><td class="mono">${i.no}</td><td>${esc(t(i.label))}</td>
        <td>${tag(invStatus(i))}</td><td class="muted">${fmtDate(i.due)}</td><td class="num">${money(i.amount)}</td>
        <td style="text-align:right">${i.status!=='Paid'
          ? adminOnly(`<button class="sm primary" onclick="payInvoice('${i.id}')">${t('btn.payNow')}</button>`)
          : '<span class="muted">'+t('portal.paidThanks')+'</span>'}</td></tr>`).join('')}</tbody></table>`
      :'<div class="empty">'+t('portal.nothing')+'</div>'}
  </div>`;
}
function viewDoc(id){
  const q=byId(db.quotes,id); if(!q) return;
  modal({title:t('doc.offer', q.no), wide:true, body:quoteDoc(q), ok:''});
}

/* ---------------- profile ---------------- */
function vProfile(){
  const me = ME || { id:null, email:'demo@nimbus.local', name:'Demo Admin', role:'admin', company_ids:[] };
  const cos = (me.company_ids||[]).map(id=>byId(db.companies,id)).filter(Boolean);
  head(t('nav.profile'), t('profile.sub'));
  const curOpts = Object.keys(CUR).map(c=>`<option value="${c}" ${c===curr?'selected':''}>${esc(t('cur.'+c))}</option>`).join('');
  view().innerHTML = `
  <div class="split">
    <div class="card"><div class="hd"><h2>${t('profile.account')}</h2></div><div class="bd">
      <div class="field"><label>${t('profile.email')}</label>${esc(me.email||'—')}</div>
      <div class="field"><label>${t('profile.role')}</label>${me.role==='admin' ? t('users.roleAdmin') : t('users.roleUser')}</div>
      <div class="field"><label>${t('profile.companies')}</label>${cos.map(c=>esc(c.name)).join(', ')||'—'}</div>
      <div class="field"><label>${t('profile.name')}</label><input id="pf-name" value="${esc(me.name||'')}"></div>
      <button class="primary" onclick="saveProfileName()">${t('btn.save')}</button>
    </div></div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="card"><div class="hd"><h2>${t('profile.preferences')}</h2></div><div class="bd">
        <div class="field"><label>${t('profile.lang')}</label>
          <select onchange="setLang(this.value)"><option value="sv" ${lang==='sv'?'selected':''}>Svenska</option><option value="en" ${lang==='en'?'selected':''}>English</option></select></div>
        <div class="field"><label>${t('profile.currency')}</label><select onchange="changeCurr(this.value)">${curOpts}</select></div>
        <div class="field"><label>${t('profile.theme')}</label>
          <select onchange="setTheme(this.value)"><option value="light" ${theme==='light'?'selected':''}>${t('theme.light')}</option><option value="dark" ${theme==='dark'?'selected':''}>${t('theme.dark')}</option></select></div>
      </div></div>
      <div class="card"><div class="hd"><h2>${t('profile.security')}</h2></div><div class="bd">
        <div class="field"><label>${t('profile.newPassword')}</label><input type="password" id="pf-pw" autocomplete="new-password"></div>
        <button class="primary" onclick="saveProfilePw()">${t('profile.changePassword')}</button>
      </div></div>
    </div>
  </div>`;
}
async function saveProfileName(){
  const name = (document.getElementById('pf-name')?.value||'').trim();
  if(!name) return;
  if(!sb){ ME = Object.assign({}, ME, { name }); toast(t('profile.nameSaved')); return; }
  const res = await sb.functions.invoke('update-profile', { body: { name } });
  if(res.error || (res.data && res.data.error)){ alert((res.error && res.error.message) || (res.data && res.data.error)); return; }
  ME = Object.assign({}, ME, { name });
  toast(t('profile.nameSaved'));
}
async function saveProfilePw(){
  const pw = document.getElementById('pf-pw')?.value || '';
  if(pw.length < 6){ alert(t('profile.pwShort')); return; }
  if(!sb){ alert(t('profile.pwShort')); return; }
  const { error } = await sb.auth.updateUser({ password: pw });
  if(error){ alert(error.message); return; }
  const el = document.getElementById('pf-pw'); if(el) el.value = '';
  toast(t('profile.passwordChanged'));
}

/* ---------------- users (admin only) ---------------- */
function vUsers(){
  if(!sb){ notFound(); return; }
  head(t('users.title'), t('users.sub'), adminOnly(`<button class="primary" onclick="inviteUser()">${t('users.invite')}</button>`));
  view().innerHTML = `<div class="card" id="userscard"></div>`;
  refreshUsers();
}
async function refreshUsers(){
  const card = document.getElementById('userscard');
  if(!card) return;
  const { data: users, error } = await sb.from('profiles').select('*');
  if(error){ card.innerHTML = '<div class="empty">' + t('users.err', error.message) + '</div>'; return; }
  usersCache = users || [];
  const coName = id => (db.companies.find(c=>c.id===id)||{name:id}).name;
  card.innerHTML = `<table>
    <thead><tr><th>${t('users.name')}</th><th>${t('users.email')}</th><th>${t('users.role')}</th><th>${t('users.companies')}</th><th></th></tr></thead>
    <tbody>${usersCache.map(u=>`<tr>
      <td>${esc(u.name||'—')}</td><td>${esc(u.email)}</td>
      <td>${u.role==='admin' ? '<span class="tag t-purple">'+t('users.roleAdmin')+'</span>' : '<span class="tag t-grey">'+t('users.roleUser')+'</span>'}</td>
      <td class="muted">${u.role==='admin' ? t('users.all') : (u.company_ids||[]).map(coName).join(', ') || '—'}</td>
      <td style="text-align:right">
        <button class="sm" onclick="editUser('${u.id}')">${t('users.edit')}</button>
        <button class="sm" onclick="resetPass('${u.id}')">${t('users.resetPass')}</button>
        ${u.id!==ME.id ? `<button class="sm ghost danger" onclick="delUser('${u.id}')">${t('users.delete')}</button>`:''}
      </td></tr>`).join('')}</tbody></table>`;
}
function inviteUser(){
  modal({title:t('users.inviteTitle'), body:`
    <div class="row">
      <div class="field"><label>${t('users.email')}</label><input name="email" type="email" required placeholder="friend@example.com"></div>
      <div class="field"><label>${t('users.name')}</label><input name="name" placeholder="Jane Doe"></div>
    </div>
    <div class="row">
      <div class="field"><label>${t('users.role')}</label><select name="role"><option value="user">${t('users.roleUser')}</option><option value="admin">${t('users.roleAdmin')}</option></select></div>
      <div class="field"><label>${t('users.password')} <span class="muted">${t('users.generated')}</span></label><input name="password" value="${pwGen()}"></div>
    </div>
    <label>${t('users.companies')}</label>
    ${db.companies.length ? `<div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px">${db.companies.map(c=>`<label style="display:flex;align-items:center;gap:8px;font-weight:500;color:var(--ink)"><input type="checkbox" name="company_ids" value="${c.id}">${esc(c.name)}</label>`).join('')}</div>` : `<p class="muted">${t('users.noCompanies')}</p>`}`,
    ok:t('users.invite'),
    onSubmit: async d => {
      const company_ids = [].concat(d.company_ids||[]).filter(Boolean);
      const { data, error } = await sb.functions.invoke('invite-user', { body: { email:d.email, password:d.password, name:d.name||null, role:d.role, company_ids } });
      if(error || (data && data.error)){ alert(t('users.err', (error && error.message) || (data && data.error))); return false; }
      toast(t('users.invited'));
    }});
}
function editUser(id){
  const u = usersCache.find(x=>x.id===id); if(!u) return;
  modal({title:t('users.editTitle'), body:`
    <div class="field"><label>${t('users.name')}</label><input name="name" value="${esc(u.name||'')}"></div>
    <div class="field"><label>${t('users.role')}</label><select name="role"><option value="user" ${u.role==='user'?'selected':''}>${t('users.roleUser')}</option><option value="admin" ${u.role==='admin'?'selected':''}>${t('users.roleAdmin')}</option></select></div>
    <label>${t('users.companies')}</label>
    <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px">${db.companies.map(c=>`<label style="display:flex;align-items:center;gap:8px;font-weight:500;color:var(--ink)"><input type="checkbox" name="company_ids" value="${c.id}" ${(u.company_ids||[]).includes(c.id)?'checked':''}>${esc(c.name)}</label>`).join('')}</div>`,
    ok:t('btn.save'),
    onSubmit: async d => {
      const company_ids = [].concat(d.company_ids||[]).filter(Boolean);
      const { data, error } = await sb.functions.invoke('update-user', { body: { id, action:'update', name:d.name, role:d.role, company_ids } });
      if(error || (data && data.error)){ alert(t('users.err', (error && error.message) || (data && data.error))); return false; }
      toast(t('users.updated'));
      if(id === ME.id) ME = Object.assign({}, ME, { name:d.name, role:d.role, company_ids });
    }});
}
function resetPass(id){
  const u = usersCache.find(x=>x.id===id); if(!u) return;
  modal({title:t('users.resetPass'), body:`
    <div class="field"><label>${t('users.password')}</label><input name="password" value="${pwGen()}"></div>
    <p class="muted" style="font-size:12px">${t('users.passHint')}</p>`,
    ok:t('btn.save'),
    onSubmit: async d => {
      const { data, error } = await sb.functions.invoke('update-user', { body: { id, action:'reset_password', password:d.password } });
      if(error || (data && data.error)){ alert(t('users.err', (error && error.message) || (data && data.error))); return false; }
      toast(t('users.passReset'));
    }});
}
function delUser(id){
  const u = usersCache.find(x=>x.id===id); if(!u) return;
  if(!confirm(t('users.confirmDelete'))) return;
  sb.functions.invoke('update-user', { body: { id, action:'delete' } }).then(res => {
    if(res.error || (res.data && res.data.error)){ toast(t('users.err', (res.error && res.error.message) || (res.data && res.data.error))); return; }
    toast(t('users.deleted')); refreshUsers();
  });
}

/* ---------------- router ---------------- */
function notFound(){ head(t('notFound.title'),''); view().innerHTML = '<div class="card"><div class="empty">'+t('notFound.body')+'</div></div>'; }
function go(h){ location.hash = h; }
const ROUTES = [
  [/^#?\/?$|^#\/dashboard$/, vDashboard],
  [/^#\/pipeline$/, vPipeline],
  [/^#\/lost$/, vLost],
  [/^#\/companies$/, vCompanies],
  [/^#\/quotes$/, vQuotes],
  [/^#\/quote\/(.+)$/, vQuote],
  [/^#\/customer\/(.+)$/, vCustomer],
  [/^#\/invoices$/, vInvoices],
  [/^#\/payments$/, vPayments],
  [/^#\/automation$/, vAutomation],
  [/^#\/profile$/, vProfile],
  [/^#\/users$/, vUsers],
  [/^#\/portal\/?(.*)$/, vPortal],
  [/^#\/trash$/, vTrash],
  [/^#\/email$/, vEmail],
  [/^#\/tasks$/, vTasks],
];
function route(){
  const h = location.hash || '#/dashboard';
  document.querySelectorAll('aside a').forEach(a=>
    a.classList.toggle('on', a.getAttribute('href')===h || (h.startsWith(a.getAttribute('href'))&&a.getAttribute('href').length>3)));
  for(const [re,fn] of ROUTES){ const m = h.match(re); if(m){ fn(m[1]); paintCounts(); return; } }
  notFound();
}
function paintNotifBadge(){
  const b = document.getElementById('notif-badge'); if(!b) return;
  const n = (db ? notifItems() : []).length;
  b.textContent = n || '';
  b.style.display = n ? 'inline-block' : 'none';
}
function toggleNotifPanel(){
  const old = document.getElementById('notifpanel');
  if(old){ old.remove(); return; }
  const btn = document.getElementById('notifbtn'); if(!btn) return;
  const r = btn.getBoundingClientRect();
  const items = notifItems();
  const p = document.createElement('div');
  p.id = 'notifpanel';
  p.style.cssText = 'position:fixed;top:' + (r.bottom + 6) + 'px;left:' + r.left + 'px;min-width:300px;max-width:380px;max-height:60vh;overflow:auto;background:var(--panel);color:var(--ink);border:1px solid var(--line);border-radius:10px;box-shadow:0 8px 30px rgba(0,0,0,.35);z-index:90;padding:6px';
  p.innerHTML = items.length
    ? items.map(n=>`<a href="${n.href}" onclick="document.getElementById('notifpanel')?.remove()"
        style="display:block;padding:8px 10px;border-radius:8px;text-decoration:none;color:inherit"
        onmouseover="this.style.background='var(--over-bg)'" onmouseout="this.style.background='transparent'">
        <div style="font-size:13px;font-weight:600;color:var(--ink)">${esc(n.title)}</div>
        ${n.body ? `<div class="muted" style="font-size:12px">${n.body}</div>` : ''}</a>`).join('')
    : `<div style="padding:14px;text-align:center;font-size:13px" class="muted">${t('notif.none')}</div>`;
  document.body.appendChild(p);
}
function paintCounts(){
  const d = db || {};
  const c = {deals:(d.deals||[]).filter(x=>!['Won','Lost'].includes(x.stage)).length,
    quotes:(d.quotes||[]).length, invoices:(d.invoices||[]).filter(i=>i.status!=='Paid').length,
    payments:(d.payments||[]).length};
  document.querySelectorAll('[data-c]').forEach(e=>e.textContent = c[e.dataset.c] ?? '');
  paintNotifBadge();
}
window.addEventListener('hashchange', route);
(async function init(){
  try{
    initGroups();
    buildNav();
    if(sb){
      const { data } = await sb.auth.getSession();
      if(data.session){ await afterLogin(data.session); }
      else showLogin();
    } else {
      await load();
      save(); paintLang(); route(); fetchRates();
      showApp();
    }
  }catch(e){
    document.getElementById('view').textContent = 'INIT ERROR: ' + (e && (e.message || e));
  }
})();
