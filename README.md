#telui-picklist

A component that takes in input list of items and produces a sublist or subset from the input


Until a proper demo page is up, you configure it like this:

```html
<telui-Picklist
                data="people"
                value="pickedPeople"
                label="People Selector"
                label-prop="<%= name.last %>, <%= name.first %>"
                ></telui-Picklist>


```

* people - []
* pickedPeople - []
* label - {{string}}
* label-prop = {{propertyname}} -or- {{template string}}