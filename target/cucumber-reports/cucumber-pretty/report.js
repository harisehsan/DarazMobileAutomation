$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/member/APP/features/voucher.feature");
formatter.feature({
  "name": "Daraz Voucher Management",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@voucher"
    }
  ]
});
formatter.scenario({
  "name": "Apply expired code voucher on checkout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@voucher"
    },
    {
      "name": "@21001814"
    },
    {
      "name": "@apply_expired_code_voucher_on_checkout"
    }
  ]
});
formatter.step({
  "name": "I select the venture",
  "keyword": "Given "
});
formatter.match({
  "location": "StartScreenSteps.iSelectTheVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search a Product using SKU for \"Checkout\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchProductSteps.iSearchAProductFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the product for checkout",
  "keyword": "And "
});
formatter.match({
  "location": "CheckOutSteps.iSelectTheProductForCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Buy Now button",
  "keyword": "And "
});
formatter.match({
  "location": "CheckOutSteps.iSelectBuyNow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with old buyer account",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpStep.iLoginWithOldBuyerAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down to the voucher",
  "keyword": "And "
});
formatter.match({
  "location": "VoucherSteps.iScrollDownToTheVoucher()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the expired voucher code on checkout",
  "keyword": "And "
});
formatter.match({
  "location": "VoucherSteps.iEnterTheExpiredVoucherCodeOnCheckout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select voucher apply button",
  "keyword": "When "
});
formatter.match({
  "location": "VoucherSteps.iSelectVoucherApplyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "VoucherSteps.iShouldSeeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
});