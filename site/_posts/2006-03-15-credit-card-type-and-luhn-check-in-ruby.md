---
layout: archive
status: publish
published: true
title: Credit card type and luhn check in ruby
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 42
wordpress_url: http://www.ioncannon.net/uncategorized/42/credit-card-type-and-luhn-check-in-ruby/
date: '2006-03-15 14:06:47 -0500'
date_gmt: '2006-03-15 18:06:47 -0500'
categories:
- ruby
tags: []
comments:
- id: 56104
  author: Life Insurance blog
  author_email: ''
  author_url: http://http:/bestotc-stock-picks.info
  date: '2008-03-05 17:41:22 -0500'
  date_gmt: '2008-03-05 22:41:22 -0500'
  content: |-
    <strong>the insurance companies don't want you to know</strong>

    Information on the life insurance industry
- id: 197179
  author: Tetsuo Namba
  author_email: namba@ca2.so-net.ne.jp
  author_url: ''
  date: '2011-02-02 03:01:04 -0500'
  date_gmt: '2011-02-02 08:01:04 -0500'
  content: |-
    # more "Ruby way" of writing the same code

    ```
    def luhnCheck(ccNumber)
      parity = ccNumber.length % 2
      sum = 0
      ccNumber.split('').each_with_index do |c, i|
        digit = c.to_i
        digit = (digit * 2) % 9  if   i % 2 == parity
        sum += digit
      end

      return (sum % 10) == 0
    end
    ```
---

I was looking at implementing a luhn and credit card type check the other day in java and I noticed that there seems to be a lack of code for doing this in ruby. So I figured I would put something together for doing the checks in ruby.


The following function will do a luhn check for a given number (any number not just credit card numbers).  The luhn algorithm is fairly simple, if you want to learn more about it <a href="http://en.wikipedia.org/wiki/Luhn_formula">check here</a>.


```
  def luhnCheck(ccNumber)
  ccNumber = ccNumber.gsub(/D/, '')
  cardLength = ccNumber.length
  parity = cardLength % 2
  sum = 0
  for i in 0...cardLength
    digit = ccNumber[i] - 48
   if i % 2 == parity
      digit = digit * 2
    end
   if digit > 9
      digit = digit - 9
    end
   sum = sum + digit
  end
  return (sum % 10) == 0
end
```

Before running the luhn check you may want to verify that you have a valid card type or at least one you want to accept. The following function will do that based on the current bin ranges for the differenct companies as of today (for more on this see the following: <a href="http://en.wikipedia.org/wiki/Credit_card_number">credit card number information</a> and <a href="http://en.wikipedia.org/wiki/Bank_Identification_Number">BIN range information</a>). N.B. Bin ranges change from time to time so this will become dated. It should be easy enough to find the updated ranges.

```
def ccTypeCheck(ccNumber)
  ccNumber = ccNumber.gsub(/D/, '')
  case ccNumber
    when /^3[47]d{13}$/ then return "AMEX"
    when /^4d{12}(d{3})?$/ then return "VISA"
    when /^5d{15}|36d{14}$/ then return "MC"
    when /^6011d{12}|650d{13}$/ then return "DISC"
    when /^3(0[0-5]|8[0-1])d{11}$/ then return "DINERS"
    when /^(39d{12})|(389d{11})$/ then return "CB"
    when /^3d{15}|1800d{11}|2131d{11}$/ then return "JCB"
    else return "NA"
  end
end
```


