from django.shortcuts import render
import json
import requests
# Create your views here.
def home(request):
    if request.user.is_authenticated:
        # context for the website
        # api call
        time = getTime()['time']
        context = {
            "time": time
        }
        return render(request, 'main/index.html', context)
    else:
        return redirect("accounts:login")

# here is the main logic for the program
# api call for time 
def getTime():
    requestURL = "http://ec2-3-14-152-181.us-east-2.compute.amazonaws.com/api/data/gettime"

    # get data from the api
    response = requests.get(requestURL)

    return response.json()

