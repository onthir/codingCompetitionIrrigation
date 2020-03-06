from django.shortcuts import render

# Create your views here.
def home(request):
    if request.user.is_authenticated:
        # context for the website
        context = {
            
        }
        return render(request, 'main/index.html', context)
    else:
        return redirect("accounts:login")

# here is the main logic for the program
