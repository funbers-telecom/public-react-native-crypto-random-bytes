package com.capriza.randombytes;

import android.util.Log;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RandomBytesPackage implements ReactPackage {
  public static final String LOG_TAG = RandomBytesPackage.class.getSimpleName();

  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    Log.d(LOG_TAG, "createNativeModules started");

    List<NativeModule> modules = new ArrayList<>();

    modules.add(new RandomBytesModule(reactContext));

    return modules;
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    Log.d(LOG_TAG, "createViewManagers started");

    return Collections.emptyList();
  }

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
    Log.d(LOG_TAG, "createJSModules started");
    return Collections.emptyList();
  }
}