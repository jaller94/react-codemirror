(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[46],{433:function(t,e,n){"use strict";n.r(e),e.default='let\n    Source = Excel.CurrentWorkbook(){[Name="Table1"]}[Content],\n    SplitColumnDelimiter = Table.SplitColumn(Source,"Input",Splitter.SplitTextByDelimiter(","),13),\n    Unpivot = Table.Unpivot(SplitColumnDelimiter,{"Input.1", "Input.2", "Input.3", "Input.4",\n    "Input.5", "Input.6",    "Input.7", "Input.8", "Input.9", "Input.10", "Input.11", "Input.12"\n    ,  "Input.13"},"Attribute","Value"),\n    RemovedColumns = Table.RemoveColumns(Unpivot,{"Attribute"}),\n    DuplicatesRemoved = Table.Distinct(RemovedColumns),\n    GroupedRows = Table.Group(DuplicatesRemoved, {"RowID"}, {{"Count of Distinct Values"\n    , each Table.RowCount(_), type number}})\nin\n    GroupedRows'}}]);
//# sourceMappingURL=46.651b4084.chunk.js.map