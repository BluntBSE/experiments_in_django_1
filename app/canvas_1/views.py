from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse  
from django.shortcuts import redirect

# Create your views here.

def index(Request):
    my_var = "Hello test var!"
    context = {"my_var": my_var}
    template = loader.get_template("canvas_1/index.html")
    print("Template is: ", template)
    return render(Request, "canvas_1/index.html", context)

