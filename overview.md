# get-x-master-snippets
[![Star on GitHub](https://img.shields.io/github/stars/kauemurakami/get_snippets_extension.svg?style=flat&logo=github&colorB=deeppink&label=stars)](https://github.com/kauemurakami/get_snippets_extension)

Extension made for you, who also uses this powerful library and doesn't like to waste time.  
In this extension, you find snippets of code snippets, or even entire classes, generated with just a few keystrokes, it's quick and easy.  
We came to make your development with [GetX Master](https://pub.dev/packages/get_x_master) much easier !!!    
So get out front and start using, it's just 50 snippets, with fully intuitive prefixes, so you don't forget :D
> The extension was made so that we can start a complete functional project without any necessary changes.

## Requirements
```
dependencies:
  flutter:
    sdk: flutter
  get_x_master: ^0.0.15
  meta: ^1.17.0
  http: ^1.5.0
```
## Notes
**implementation**
>Import errors can appear until all files are created. 
>When all files are created, just import all dependencies to resolve all errors.  

**proposed structure**
<pre>
|-- lib
  |-- src
    |-- controller
      |-- mycontrollerfolder
        |-- my_controller.dart 
    |-- data
      |-- model
        |-- my_model.dart
      |-- repository
        |-- my_repository.dart
      |-- provider
        |-- my_provider.dart
    |-- ui
      |-- android
        |-- widgets
          |-- custom_widgets_global.dart
        |-- mypagefolder
          |-- widgets
            |-- custom_widget_in_my_page.dart
          |-- my_page.dart
      |-- ios
      |-- theme
        |-- my_theme.dart
    |-- routes
      |-- my_routes.dart
  |-- main.dart
</pre>

## Example
[See complete example here](https://github.com/kauemurakami/get_snippets_extension/tree/doc/examples)
## Features

### getxmastermain
Quickly rewrite your **main.dart** file  
**getxmastermain** snippet will bring you the complete class, you just need to set your **home**  
**Usage:** In your main class, delete **all** content and start writing **getxmastermain**,  
wait for the snippet and that's it !

![](examples/getmain.gif)

### getxmasterpage
Create, quickly, Stateless classes with widget and reactive features provided by [GetX Master](https://pub.dev/packages/get_x_master), GetX,  
**getxmasterpage** snippet, will bring you a complete stateless class, you only need to indicate:  
- The name of your Page;  
- The name of your Repository;  
- The widget **parent** of **GetX**.  
- The controller name,
- the **GetX** child widget.  
**Usage:** When creating a ***my_page.dart*** empty file, you can start by writing **getxmasterpage**,  
wait for the snippet, define the necessary data and ready !  
>> **IMPORTANT TIP:** To take full advantage of using this package, when generating classes with more than one attribute to be defined, you can define them sequentially, every full word press **TAB** to go to the next attribute.

![](examples/getpage.gif)

### getxmasterroutes
Create, quickly, a class to manage your Routes with [GetX Master](https://pub.dev/packages/get_x_master)  
**getxmasterroutes** snippet, will bring you a complete Route class, you just need to add more routes.  
**Usage:** When creating a ***my_routes.dart*** empty file, you can start by writing **getxmasterroutes**,  
wait for the snippet and that's it !

![](examples/getroutes.gif)

### getxmastercontroller
Create, quickly, Controller classes with RxController from [GetX Master](https://pub.dev/packages/get_x_master).  
**getxmastercontroller** snippet, will bring you a complete Controller class.  
**Usage:** When creating a new ***my_controller.dart*** empty file, start writing **getxmastercontroller**,  
wait for the snippet, define the data and ready !

![](examples/getcontroller.gif)

### getxmasterrepository
Create, quickly, Repository classes for your entities.  
**getxmasterrepository** snippet, will bring you a complete Repository class, including an example of a complete crud that complements when you generate the provider with *getxmasterprovider*.  
**Usage:** When creating a new ***my_repository.dart*** empty file, start writing **getxmasterrepository**,  
wait for the snippet, define the data and ready !

![](examples/getrepository.gif)

### getxmasterprovider
Create quickly Provider classes, to provide data to your application, either via API or local database.  
**getxmasterprovider** snippet, will bring you a complete Provider class, including examples of a complete crud that can be consumed by the functions generated with *getxmasterrepository*.  
**Usage:** When creating a new ***my_provider.dart*** empty file, start writing **getxmasterprovider**,  
wait for the snippet, define the data and ready !

![](examples/getprovider.gif)

### getxmasterfinal
Create quickly **final observable** variables by [GetX Master](https://pub.dev/packages/get_x_master).  
**getxmasterfinal** snippet, will bring you an observable final variable and its **get** and **set** methods.  
**Usage:** In any file that has the [GetX Master](https://pub.dev/packages/get_x_master) package, just start writing **getxmasterfinal**,  
wait for the snippet, define the variable name and ready !

![](examples/getfinal.gif)

### getxmasterset
Create quickly a **set** function for an observable [GetX Master](https://pub.dev/packages/get_x_master).  
**getxmasterset** snippet, will bring you a function to assign a value to your observable.  
**Usage:** In any file that has the [GetX Master](https://pub.dev/packages/get_x_master) package, just start writing **getxmasterset**,  
wait for the snippet, define the variable name and ready !

![](examples/getset.gif)

### getxmasterget
Create quickly a **get** function for an observable [GetX Master](https://pub.dev/packages/get_x_master).  
**getxmasterget** snippet, will bring you a function to retrieve the value of your observable.  
**Usage:** In any file that has the [GetX Master](https://pub.dev/packages/get_x_master) package, just start writing **getxmasterget**,  
wait for the snippet, define the variable name and ready !

![](examples/getget.gif)

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of get-x-master-snippets  
snippets for:  
- Model class generation  
- Repository class generation  
- Controller class generation  
- Main class generation (**main**)  
- Provider class generation  
- Creation of **.obs** variables along with their respective **get** and **set**  
- Generation of **one** get **or one** set  


**Enjoy!**

-----------------------------------------------------------------------------------------------------------