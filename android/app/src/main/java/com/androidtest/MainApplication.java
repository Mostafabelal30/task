package com.androidtest;

import android.app.Application;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.util.Base64;
import android.util.Log;

import com.airbnb.android.react.maps.MapsPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.soloader.SoLoader;
import com.reactnative.ivpusic.imagepicker.PickerPackage;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {


 private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
        new FBSDKPackage(mCallbackManager),
            new MapsPackage(),
            new PickerPackage(),
            new ReactVideoPackage()
            );
  }


};

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  public void showHashKey(Context context) {
    try {
      String key = "";
      String packagename = context.getPackageName();
      PackageInfo info = context.getPackageManager().getPackageInfo(
              packagename, PackageManager.GET_SIGNATURES); // Your package
      // name here
      for (Signature signature : info.signatures) {
        MessageDigest md = MessageDigest.getInstance("SHA");
        md.update(signature.toByteArray());
        key = Base64.encodeToString(md.digest(), Base64.DEFAULT);
        Log.i("KeyHash:",
                "KeyHash: "
                        + Base64.encodeToString(md.digest(),
                        Base64.DEFAULT));
        Log.i("KeyHash1:", "KeyHash1: " + key);
      }
    } catch (PackageManager.NameNotFoundException e) {
    } catch (NoSuchAlgorithmException e) {
    }
  }


  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
    // If you want to use AppEventsLogger to log events.
    showHashKey(getApplicationContext());
    AppEventsLogger.activateApp(this);
    SoLoader.init(this, /* native exopackage */ false);
  }
}
