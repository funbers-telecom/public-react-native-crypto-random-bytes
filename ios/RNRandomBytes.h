
#import <Foundation/Foundation.h>
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#import <React/RCTBridge.h>
#else
#import "RCTBridgeModule.h"
#import "RCTBridge.h"
#endif

@interface RNRandomBytes : NSObject <RCTBridgeModule>

@end
  
