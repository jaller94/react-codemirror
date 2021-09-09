(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[19],{408:function(n,r,t){"use strict";t.r(r),r.default='// We often need our programs to perform operations on\r\n// collections of data, like selecting all items that\r\n// satisfy a given predicate or mapping all items to a new\r\n// collection with a custom function.\r\n\r\n// In some languages it\'s idiomatic to use [generic](http://en.wikipedia.org/wiki/Generic_programming)\r\n// data structures and algorithms. Go does not support\r\n// generics; in Go it\'s common to provide collection\r\n// functions if and when they are specifically needed for\r\n// your program and data types.\r\n\r\n// Here are some example collection functions for slices\r\n// of `strings`. You can use these examples to build your\r\n// own functions. Note that in some cases it may be\r\n// clearest to just inline the collection-manipulating\r\n// code directly, instead of creating and calling a\r\n// helper function.\r\n\r\npackage main\r\n\r\nimport "strings"\r\nimport "fmt"\r\n\r\n// Returns the first index of the target string `t`, or\r\n// -1 if no match is found.\r\nfunc Index(vs []string, t string) int {\r\n    for i, v := range vs {\r\n        if v == t {\r\n            return i\r\n        }\r\n    }\r\n    return -1\r\n}\r\n\r\n// Returns `true` if the target string t is in the\r\n// slice.\r\nfunc Include(vs []string, t string) bool {\r\n    return Index(vs, t) >= 0\r\n}\r\n\r\n// Returns `true` if one of the strings in the slice\r\n// satisfies the predicate `f`.\r\nfunc Any(vs []string, f func(string) bool) bool {\r\n    for _, v := range vs {\r\n        if f(v) {\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}\r\n\r\n// Returns `true` if all of the strings in the slice\r\n// satisfy the predicate `f`.\r\nfunc All(vs []string, f func(string) bool) bool {\r\n    for _, v := range vs {\r\n        if !f(v) {\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}\r\n\r\n// Returns a new slice containing all strings in the\r\n// slice that satisfy the predicate `f`.\r\nfunc Filter(vs []string, f func(string) bool) []string {\r\n    vsf := make([]string, 0)\r\n    for _, v := range vs {\r\n        if f(v) {\r\n            vsf = append(vsf, v)\r\n        }\r\n    }\r\n    return vsf\r\n}\r\n\r\n// Returns a new slice containing the results of applying\r\n// the function `f` to each string in the original slice.\r\nfunc Map(vs []string, f func(string) string) []string {\r\n    vsm := make([]string, len(vs))\r\n    for i, v := range vs {\r\n        vsm[i] = f(v)\r\n    }\r\n    return vsm\r\n}\r\n\r\nfunc main() {\r\n\r\n    // Here we try out our various collection functions.\r\n    var strs = []string{"peach", "apple", "pear", "plum"}\r\n\r\n    fmt.Println(Index(strs, "pear"))\r\n\r\n    fmt.Println(Include(strs, "grape"))\r\n\r\n    fmt.Println(Any(strs, func(v string) bool {\r\n        return strings.HasPrefix(v, "p")\r\n    }))\r\n\r\n    fmt.Println(All(strs, func(v string) bool {\r\n        return strings.HasPrefix(v, "p")\r\n    }))\r\n\r\n    fmt.Println(Filter(strs, func(v string) bool {\r\n        return strings.Contains(v, "e")\r\n    }))\r\n\r\n    // The above examples all used anonymous functions,\r\n    // but you can also use named functions of the correct\r\n    // type.\r\n    fmt.Println(Map(strs, strings.ToUpper))\r\n\r\n}\r\n'}}]);
//# sourceMappingURL=19.a28d5c5d.chunk.js.map