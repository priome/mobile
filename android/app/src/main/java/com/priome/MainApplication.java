package com.priome;

import android.app.Application;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

// Firebase
import io.invertase.firebase.RNFirebasePackage; // 
// import io.invertase.firebase.admob.RNFirebaseAdMobPackage; //Firebase AdMob
// import io.invertase.firebase.analytics.RNFirebaseAnalyticsPackage; // Firebase Analytics
import io.invertase.firebase.auth.RNFirebaseAuthPackage; // Firebase Auth
// import io.invertase.firebase.config.RNFirebaseRemoteConfigPackage; // Firebase Remote Config
// import io.invertase.firebase.crash.RNFirebaseCrashPackage; // Firebase Crash Reporting
import io.invertase.firebase.database.RNFirebaseDatabasePackage; // Firebase Realtime Database
// import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // Firebase Cloud Messaging
// import io.invertase.firebase.perf.RNFirebasePerformancePackage; // Firebase Performance
import io.invertase.firebase.storage.RNFirebaseStoragePackage; // Firebase Storage

public class MainApplication extends Application implements ReactApplication {

  // As per: https://github.com/facebook/react-native-fbsdk
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
            new VectorIconsPackage(),
            new RNDeviceInfo(),

            // Firebase
            new RNFirebasePackage(),
            // new RNFirebaseAdMobPackage(),
            // new RNFirebaseAnalyticsPackage(),
            new RNFirebaseAuthPackage(),
            // new RNFirebaseRemoteConfigPackage(),
            // new RNFirebaseCrashPackage(),
            new RNFirebaseDatabasePackage(),
            // new RNFirebaseMessagingPackage(),
            // new RNFirebasePerformancePackage(),
            new RNFirebaseStoragePackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    FacebookSdk.sdkInitialize(getApplicationContext());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
